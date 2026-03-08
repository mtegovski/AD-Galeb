import {Component, inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CityId, TripOption } from './trip-selector.models';
import {CITIES, Locale, ROUTES, RUNS} from '../../data/trip-selector.data';
import {buildTripOptions, translateCity, translateRoute} from '../../utils/trip-selector.util';

type TripForm = FormGroup<{
  fromCityId: import('@angular/forms').FormControl<CityId>;
  toCityId: import('@angular/forms').FormControl<CityId>;
}>;

@Component({
  selector: 'trip-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trip-selector.component.html',
})
export class TripSelectorComponent implements OnInit, OnDestroy {
  // Static data
  readonly cities = CITIES;
  readonly routes = ROUTES;
  readonly runs = RUNS;

  // Built in ngOnInit to avoid fb init issues
  form!: TripForm;
  locale = inject(LOCALE_ID) as Locale;

  // Plain array bound in template
  tripOptions: TripOption[] = [];

  private sub?: Subscription;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      fromCityId: ['OHR' as CityId],
      toCityId: ['SKP' as CityId],
    }) as TripForm;

    // initial compute
    this.recomputeTrips();

    // recompute on every change
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

  cityName(id: CityId): string {
    return translateCity(id, this.locale);
  }

  protected readonly translateCity = translateCity;
  protected readonly translateRoute = translateRoute;
}
