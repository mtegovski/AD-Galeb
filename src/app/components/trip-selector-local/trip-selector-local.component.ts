import {Component, inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {buildTripOptions, translateCity, translateRoute} from '../../utils/trip-selector.util';
import {Locale} from '../../utils/languages.util';
import {LOCAL_CITIES, LOCAL_ROUTES, LOCAL_RUNS} from '../../data/trip-selector-local.data';
import {City, CityId, Route, Run, StopLocation, TripOption} from '../trip-selector/trip-selector.models';
import {StopMapModalComponent} from '../stop-map-modal/stop-map-modal.component';

type TripLocalForm = FormGroup<{
  fromCityId: import('@angular/forms').FormControl<CityId>;
  toCityId: import('@angular/forms').FormControl<CityId>;
}>;

@Component({
  selector: 'trip-selector-local',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StopMapModalComponent],
  templateUrl: './trip-selector-local.component.html',
})
export class TripSelectorLocalComponent implements OnInit, OnDestroy {
  readonly cities: City[] = LOCAL_CITIES;
  readonly routes: Route[] = LOCAL_ROUTES;
  readonly runs: Run[] = LOCAL_RUNS;
  private sub?: Subscription;

  form!: TripLocalForm;
  locale = inject(LOCALE_ID) as Locale;

  tripOptions: TripOption[] = [];

  mapModalCityName: string = '';
  mapModalLocations: StopLocation[] = [];
  mapModalOpen = false;

  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    const defaultFrom = this.cities[0]?.id ?? '';
    const defaultTo = this.cities[1]?.id ?? '';

    this.form = this.fb.nonNullable.group({
      fromCityId: [defaultFrom as CityId],
      toCityId: [defaultTo as CityId],
    }) as TripLocalForm;

    this.recomputeTrips();
    this.sub = this.form.valueChanges.subscribe(() => this.recomputeTrips());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  recomputeTrips(): void {
    const from = this.form.controls.fromCityId.value;
    const to = this.form.controls.toCityId.value;

    if (!from || !to || from === to) {
      this.tripOptions = [];
      return;
    }

    this.tripOptions = buildTripOptions({
      fromCityId: from,
      toCityId: to,
      routes: this.routes,
      runs: this.runs,
    });
  }

  switchCities(): void {
    const from = this.form.controls.fromCityId.value;
    const to = this.form.controls.toCityId.value;

    this.form.patchValue({
      fromCityId: to,
      toCityId: from,
    });
  }

  fromCityHasStops(): boolean {
    const fromId = this.form?.controls.fromCityId.value;
    const toId = this.form?.controls.toCityId.value;
    if (!fromId || !toId || fromId === toId) return false;

    for (const route of this.routes) {
      const fromStop = route.stops.find(s => s.cityId === fromId);
      const toStop = route.stops.find(s => s.cityId === toId);
      if (!fromStop || !toStop) continue;
      const fromIdx = route.stops.indexOf(fromStop);
      const toIdx = route.stops.indexOf(toStop);
      if (fromIdx >= toIdx) continue;
      if ((fromStop.boardingLocations ?? []).length > 0) return true;
    }
    return false;
  }

  openFromCityMap(): void {
    const fromId = this.form.controls.fromCityId.value;
    const toId = this.form.controls.toCityId.value;
    const locations: StopLocation[] = [];
    const seen = new Set<string>();

    for (const route of this.routes) {
      const fromStop = route.stops.find(s => s.cityId === fromId);
      const toStop = route.stops.find(s => s.cityId === toId);

      // Only consider routes where from comes before to
      if (!fromStop || !toStop) continue;
      const fromIdx = route.stops.indexOf(fromStop);
      const toIdx = route.stops.indexOf(toStop);
      if (fromIdx >= toIdx) continue;

      for (const loc of fromStop.boardingLocations ?? []) {
        const key = `${loc.lat},${loc.lng}`;
        if (!seen.has(key)) {
          seen.add(key);
          locations.push(loc);
        }
      }
    }

    this.mapModalCityName = translateCity(fromId, this.locale);
    this.mapModalLocations = locations;
    this.mapModalOpen = true;
  }

  protected readonly translateCity = translateCity;
  protected readonly translateRoute = translateRoute;
}
