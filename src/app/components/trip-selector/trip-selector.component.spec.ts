import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { TripSelectorComponent } from './trip-selector.component';
import { CITIES } from '../../data/trip-selector.data';

const createSelector = () => {
  TestBed.configureTestingModule({
    imports: [TripSelectorComponent],
    providers: [
      provideRouter([]),
      {provide: ActivatedRoute, useValue: {snapshot: {data: {mode: 'intercity'}, queryParamMap: convertToParamMap({})}}},
    ],
  });
  const fixture = TestBed.createComponent(TripSelectorComponent);
  fixture.detectChanges();
  return fixture.componentInstance;
};

describe('TripSelectorComponent when a search finds nothing', () => {
  beforeEach(() => localStorage.clear());

  it('only suggests destinations and a reverse direction that have departures', () => {
    const selector = createSelector();
    const search = (from: string, to: string) => {
      selector.form.setValue({fromCityId: from as never, toCityId: to as never});
      return selector.tripOptions.length;
    };

    let emptySearches = 0;
    for (const from of CITIES) {
      for (const to of CITIES) {
        if (from.id === to.id || search(from.id, to.id) > 0) continue;
        emptySearches++;
        const {reachableCities, hasReverseTrips} = selector;

        expect(reachableCities).not.toContain(to.id);
        for (const id of reachableCities) {
          expect(search(from.id, id), `${from.id} → ${id}`).toBeGreaterThan(0);
        }
        expect(search(to.id, from.id) > 0).toBe(hasReverseTrips);
      }
    }
    expect(emptySearches).toBeGreaterThan(0);
  });
});
