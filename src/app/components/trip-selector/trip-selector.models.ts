export type CityId = string;

export interface City {
  id: CityId;
  name: string;
}

export interface StopLocation {
  lat: number;
  lng: number;
  label?: StopNames;
}

interface StopNames {
  mk: string;
  en: string;
  sr: string;
}

export interface RouteStop {
  cityId: CityId;
  /** Minutes from route start to arrival at this stop */
  arrivalOffsetMin: number;
  /** Minutes from route start to departure from this stop */
  departureOffsetMin: number;
  boardingLocations?: StopLocation[]; // one or more physical boarding points
}

export interface Route {
  id: string;
  name: string;
  stops: RouteStop[];
  // Change this from a single TicketPrice to a dictionary/record
  prices: Record<string, TicketPrice>;
}

export interface Run {
  id: string;
  routeId: string;
  /** "HH:mm" local time */
  departureTimeLocal: string;
}

export interface TripOption {
  runId: string;
  routeId: string;

  fromCityId: CityId;
  toCityId: CityId;

  segmentStopIndices: { fromIndex: number; toIndex: number };

  departureTimeLocal: string;
  arrivalTimeLocal: string;
  /** Days between departure and arrival (1 when the bus arrives after midnight) */
  arrivalDayOffset: number;

  stops: CityId[];

  /** Every stop of this segment with its local time, from departure to arrival */
  stopTimes: StopTime[];

  /** Number of intermediate stops (excluding from + to). */
  intermediateStopsCount: number;

  /** Duration of this segment in minutes. */
  durationMin: number;

  isSubtrip: boolean;
  routeName: string;
  runLabel: string;
  price: TicketPrice;
}

export interface StopTime {
  cityId: CityId;
  /** "HH:mm" local time (departure time for the first stop, arrival time for the others) */
  time: string;
  /** Days after the departure day (1 when the bus reaches the stop after midnight) */
  dayOffset: number;
}

export interface TicketPrice {
  oneWayTicketMKD: number;
  returnTicketMKD?: number;
  studentTicketMKD?: number;
  oneWayTicketRSD?: number;
  returnTicketRSD?: number;
}

