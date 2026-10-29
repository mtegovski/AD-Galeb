import {Component, inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {Subscription} from 'rxjs';
import {
  buildTripOptions,
  findNextTrip,
  formatDuration,
  translateCity,
  translateRoute
} from '../../utils/trip-selector.util';
import {Locale} from '../../utils/languages.util';
import {loadLastSearch, saveLastSearch} from '../../utils/last-search.util';
import {CITIES, ROUTES, RUNS} from '../../data/trip-selector.data';
import {LOCAL_CITIES, LOCAL_ROUTES, LOCAL_RUNS} from '../../data/trip-selector-local.data';
import {City, CityId, Route, Run, StopLocation, TripOption} from './trip-selector.models';
import {StopMapModalComponent} from '../stop-map-modal/stop-map-modal.component';

type TripForm = FormGroup<{
  fromCityId: import('@angular/forms').FormControl<CityId>;
  toCityId: import('@angular/forms').FormControl<CityId>;
}>;

/** Intercity routes (/trips) or local Ohrid-area routes (/trips/local), set via route data */
export type TripMode = 'intercity' | 'local';

@Component({
  selector: 'trip-selector',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive, StopMapModalComponent],
  templateUrl: './trip-selector.component.html',
})
export class TripSelectorComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly mode: TripMode = this.route.snapshot.data['mode'] ?? 'intercity';
  readonly isLocal = this.mode === 'local';

  // Static data
  readonly cities: City[] = this.isLocal ? LOCAL_CITIES : CITIES;
  readonly routes: Route[] = this.isLocal ? LOCAL_ROUTES : ROUTES;
  readonly runs: Run[] = this.isLocal ? LOCAL_RUNS : RUNS;

  // Built in ngOnInit to avoid fb init issues
  form!: TripForm;
  locale = inject(LOCALE_ID) as Locale;

  // Plain array bound in template
  tripOptions: TripOption[] = [];
  /** The first trip that has not departed yet today (Skopje time) */
  nextTrip?: TripOption;
  /** Trips whose stop-by-stop timeline is expanded */
  private expandedTrips = new Set<string>();

  mapModalLocations: StopLocation[] = [];
  mapModalOpen = false;

  private sub?: Subscription;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    // A shared or bookmarked search (e.g. /trips?from=SKP&to=BIT) wins, then the visitor's
    // last search on this page; otherwise no city is preselected
    const params = this.route.snapshot.queryParamMap;
    const initial = params.has('from') || params.has('to')
      ? {from: params.get('from'), to: params.get('to')}
      : loadLastSearch(this.mode);

    this.form = this.fb.nonNullable.group({
      fromCityId: [(this.isKnownCity(initial?.from ?? null) ? initial!.from : '') as CityId],
      toCityId: [(this.isKnownCity(initial?.to ?? null) ? initial!.to : '') as CityId],
    }) as TripForm;

    // initial compute
    this.recomputeTrips();
    this.rememberSearch();
    // A search restored from the last visit also goes into the URL, so it can be shared
    this.updateUrl();

    // recompute on every change
    this.sub = this.form.valueChanges.subscribe(() => {
      this.recomputeTrips();
      this.updateUrl();
      this.rememberSearch();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  recomputeTrips(): void {
    const from = this.form.controls.fromCityId.value;
    const to = this.form.controls.toCityId.value;
    this.expandedTrips.clear();

    if (!from || !to || from === to) {
      this.tripOptions = [];
      this.nextTrip = undefined;
      return;
    }

    this.tripOptions = buildTripOptions({
      fromCityId: from,
      toCityId: to,
      routes: this.routes,
      runs: this.runs,
    });
    this.nextTrip = findNextTrip(this.tripOptions);
  }

  /**
   * Keeps the selected cities in the URL so the search can be shared or bookmarked.
   * Uses replaceState instead of a router navigation, so changing a city
   * does not add history entries or scroll the page to the top.
   */
  private updateUrl(): void {
    const url = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: {
        from: this.form.controls.fromCityId.value || null,
        to: this.form.controls.toCityId.value || null,
      },
    });
    this.location.replaceState(this.router.serializeUrl(url));
  }

  /** Saves the search once both cities are chosen, so the page (and the home page search) can reopen it */
  private rememberSearch(): void {
    const from = this.form.controls.fromCityId.value;
    const to = this.form.controls.toCityId.value;
    if (from && to && from !== to) {
      saveLastSearch(this.mode, {from, to});
    }
  }

  private isKnownCity(id: string | null): id is CityId {
    return !!id && this.cities.some(c => c.id === id);
  }

  switchCities(): void {
    const from = this.form.controls.fromCityId.value;
    const to = this.form.controls.toCityId.value;

    this.form.patchValue({
      fromCityId: to,
      toCityId: from,
    });
  }

  isExpanded(trip: TripOption): boolean {
    return this.expandedTrips.has(trip.runId + '-' + trip.routeId);
  }

  toggleStops(trip: TripOption): void {
    const key = trip.runId + '-' + trip.routeId;
    if (!this.expandedTrips.delete(key)) {
      this.expandedTrips.add(key);
    }
  }

  get mapModalTitle(): string {
    return !this.isLocal && this.form.controls.fromCityId.value === 'OHR' ? 'arrivalStops' : 'departureStops';
  }

  fromCityHasStops(): boolean {
    return this.fromCityBoardingLocations().length > 0;
  }

  openFromCityMap(): void {
    this.mapModalLocations = this.fromCityBoardingLocations();
    this.mapModalOpen = true;
  }

  /** Unique boarding locations of the "from" city, on routes where "from" comes before "to" */
  private fromCityBoardingLocations(): StopLocation[] {
    const fromId = this.form?.controls.fromCityId.value;
    const toId = this.form?.controls.toCityId.value;
    if (!fromId || !toId || fromId === toId) return [];

    const locations: StopLocation[] = [];
    const seen = new Set<string>();

    for (const route of this.routes) {
      const fromIdx = route.stops.findIndex(s => s.cityId === fromId);
      const toIdx = route.stops.findIndex(s => s.cityId === toId);
      if (fromIdx < 0 || toIdx < 0 || fromIdx >= toIdx) continue;

      for (const loc of route.stops[fromIdx].boardingLocations ?? []) {
        const key = `${loc.lat},${loc.lng}`;
        if (!seen.has(key)) {
          seen.add(key);
          locations.push(loc);
        }
      }
    }

    return locations;
  }

  cityName(id: CityId): string {
    return translateCity(id, this.locale);
  }

  protected readonly formatDuration = formatDuration;
  protected readonly translateCity = translateCity;
  protected readonly translateRoute = translateRoute;
}
