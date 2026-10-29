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
      const departMins = runStartMins + fromStop.departureOffsetMin;
      const arriveMins = runStartMins + toStop.arrivalOffsetMin;
      const departTime = toHHMM(departMins);
      const arriveTime = toHHMM(arriveMins);
      const duration = toStop.arrivalOffsetMin - fromStop.departureOffsetMin;

      const currentTrip: TripOption = {
        runId: run.id,
        routeId: route.id,
        fromCityId,
        toCityId,
        segmentStopIndices: { fromIndex: fromIdx, toIndex: toIdx },
        departureTimeLocal: departTime,
        arrivalTimeLocal: arriveTime,
        arrivalDayOffset: Math.floor(arriveMins / 1440) - Math.floor(departMins / 1440),
        stops: route.stops.slice(fromIdx, toIdx + 1).map(s => s.cityId),
        stopTimes: route.stops.slice(fromIdx, toIdx + 1).map((s, i) => {
          const mins = runStartMins + (i === 0 ? s.departureOffsetMin : s.arrivalOffsetMin);
          return {
            cityId: s.cityId,
            time: toHHMM(mins),
            dayOffset: Math.floor(mins / 1440) - Math.floor(departMins / 1440),
          };
        }),
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

/** Current time of day in North Macedonia, in minutes since midnight */
export const nowInSkopjeMinutes = (): number => {
  const hhmm = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Skopje',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(new Date());
  return toMinutes(hhmm);
};

/** First trip of the day that has not departed yet (trips must be sorted by departure) */
export const findNextTrip = (trips: TripOption[]): TripOption | undefined => {
  const now = nowInSkopjeMinutes();
  return trips.find(t => toMinutes(t.departureTimeLocal) > now);
};

/** e.g. "3 h 15 min", "45 min", "2 h" */
export const formatDuration = (totalMin: number): string => {
  const hours = Math.floor(totalMin / 60);
  const minutes = totalMin % 60;
  const h = $localize`:@@durationHoursUnit:ч`;
  const m = $localize`:@@durationMinutesUnit:мин`;

  if (hours === 0) return `${minutes} ${m}`;
  if (minutes === 0) return `${hours} ${h}`;
  return `${hours} ${h} ${minutes} ${m}`;
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

