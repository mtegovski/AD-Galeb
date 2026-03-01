import {CityId, Route, Run, TripOption} from '../components/trip-selector/trip-selector.models';

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
  fromCityId: CityId;
  toCityId: CityId;
  routes: Route[];
  runs: Run[];
}): TripOption[] => {
  const { fromCityId, toCityId, routes, runs } = params;

  const runsByRoute = new Map<string, Run[]>();
  for (const run of runs) {
    runsByRoute.set(run.routeId, [...(runsByRoute.get(run.routeId) ?? []), run]);
  }

  const options: TripOption[] = [];

  for (const route of routes) {
    const fromIndex = route.stops.findIndex(s => s.cityId === fromCityId);
    const toIndex = route.stops.findIndex(s => s.cityId === toCityId);
    if (fromIndex < 0 || toIndex < 0 || fromIndex >= toIndex) continue;

    const fromStop = route.stops[fromIndex];
    const toStop = route.stops[toIndex];

    // ✅ These are the correct offsets to use:
    // depart at FROM = departureOffsetMin
    // arrive at TO   = arrivalOffsetMin
    const departOffset = fromStop.departureOffsetMin;
    const arriveOffset = toStop.arrivalOffsetMin;

    const segmentStops = route.stops.slice(fromIndex, toIndex + 1).map(s => s.cityId);
    const intermediateStopsCount = Math.max(0, segmentStops.length - 2);
    const durationMin = Math.max(0, arriveOffset - departOffset);

    for (const run of runsByRoute.get(route.id) ?? []) {
      const runStart = toMinutes(run.departureTimeLocal);

      const departureTimeLocal = toHHMM(runStart + departOffset);
      const arrivalTimeLocal = toHHMM(runStart + arriveOffset);

      const isSubtrip = !(fromIndex === 0 && toIndex === route.stops.length - 1);

      options.push({
        runId: run.id,
        routeId: route.id,
        fromCityId,
        toCityId,
        segmentStopIndices: { fromIndex, toIndex },
        departureTimeLocal,
        arrivalTimeLocal,
        stops: segmentStops,
        intermediateStopsCount,
        durationMin,
        isSubtrip,
        routeName: route.name,
        runLabel: `${route.name} (${run.departureTimeLocal})`,
        price: route.price,
      });
    }
  }

  return options.sort((a, b) => a.departureTimeLocal.localeCompare(b.departureTimeLocal));
};

