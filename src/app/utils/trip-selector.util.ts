import { Route, Run, TripOption } from '../components/trip-selector/trip-selector.models';
import {CITY_INFO_TRANSLATIONS, CITY_TRANSLATIONS} from '../data/trip-selector.data';
import {Locale} from './languages.util';

export const toMinutes = (hhmm: string): number => {
  const [hh, mm] = hhmm.split(':').map(Number);
  return hh * 60 + mm;
};

export const toHHMM = (mins: number): string => {
  const m = ((mins % 1440) + 1440) % 1440;
  const hh = Math.floor(m / 60).toString().padStart(2, '0');
  const mm = (m % 60).toString().padStart(2, '0');
  return `${hh}:${mm}`;
};

export const buildTripOptions = (params: {
  fromCityId: string;
  toCityId: string;
  routes: Route[];
  runs: Run[];
}): TripOption[] => {
  const { fromCityId, toCityId, routes, runs } = params;

  // 1. Group runs by their Route ID for efficient lookup
  const runsByRoute = new Map<string, Run[]>();
  for (const run of runs) {
    runsByRoute.set(run.routeId, [...(runsByRoute.get(run.routeId) ?? []), run]);
  }

  // 2. This Map will store the "Best" trip for a specific Departure + Arrival time
  // Key: "DepartureTime|ArrivalTime" (e.g., "21:30|04:30")
  const bestOptionsMap = new Map<string, TripOption>();

  for (const route of routes) {
    const fromIdx = route.stops.findIndex(s => s.cityId === fromCityId);
    const toIdx = route.stops.findIndex(s => s.cityId === toCityId);

    // Basic route validation
    if (fromIdx < 0 || toIdx < 0 || fromIdx >= toIdx) continue;

    const priceKey = `${fromCityId}-${toCityId}`;
    const segmentPrice = route.prices[priceKey];
    if (!segmentPrice) continue;

    const fromStop = route.stops[fromIdx];
    const toStop = route.stops[toIdx];

    for (const run of runsByRoute.get(route.id) ?? []) {
      const runStartMins = toMinutes(run.departureTimeLocal);
      const departTime = toHHMM(runStartMins + fromStop.departureOffsetMin);
      const arriveTime = toHHMM(runStartMins + toStop.arrivalOffsetMin);
      const duration = toStop.arrivalOffsetMin - fromStop.departureOffsetMin;

      const currentTrip: TripOption = {
        runId: run.id,
        routeId: route.id,
        fromCityId,
        toCityId,
        segmentStopIndices: { fromIndex: fromIdx, toIndex: toIdx },
        departureTimeLocal: departTime,
        arrivalTimeLocal: arriveTime,
        stops: route.stops.slice(fromIdx, toIdx + 1).map(s => s.cityId),
        intermediateStopsCount: Math.max(0, (toIdx - fromIdx) - 1),
        durationMin: duration,
        isSubtrip: !(fromIdx === 0 && toIdx === route.stops.length - 1),
        routeName: route.name,
        runLabel: `${route.name} (${run.departureTimeLocal})`,
        price: segmentPrice,
      };

      // --- GENERIC LOGIC ---
      // We identify a "service" by when it arrives.
      // If two buses arrive at the same destination at the same time,
      // the user will always prefer the one that left later (shorter duration).
      const serviceKey = arriveTime;
      const existing = bestOptionsMap.get(serviceKey);

      if (!existing || currentTrip.durationMin < existing.durationMin) {
        bestOptionsMap.set(serviceKey, currentTrip);
      }
    }
  }

  return Array.from(bestOptionsMap.values())
    .sort((a, b) => a.departureTimeLocal.localeCompare(b.departureTimeLocal));
};

export const translateCity = (id: string, locale: Locale): string => {
  return CITY_TRANSLATIONS[id]?.[locale] ?? id;
}

export const translateCityInfo = (id: string, locale: Locale): string => {
  return CITY_INFO_TRANSLATIONS[id]?.[locale] ?? id;
}

export const translateRoute = (routeName: string, locale: Locale): string => {
  const cities = routeName.split(" – ");
  return CITY_TRANSLATIONS[cities[0]]?.[locale] + ' - ' + CITY_TRANSLATIONS[cities[1]]?.[locale];
}

