import {City, Route, Run} from '../components/trip-selector/trip-selector.models';

export const CITIES: City[] = [
  { id: 'OHR', name: 'Ohrid' },
  { id: 'KIC', name: 'Kičevo' },
  { id: 'SKP', name: 'Skopje' },
  { id: 'NIS', name: 'Niš' },
  { id: 'BEG', name: 'Belgrade' },
];

export const ROUTES: Route[] = [
  {
    id: 'R1',
    name: 'Ohrid – Skopje',
    price: {
      oneWayTicket: 350,
      returnTicket: 600,
      studentTicket: 300,
    },
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'KIC', arrivalOffsetMin: 70, departureOffsetMin: 75 },
      { cityId: 'SKP', arrivalOffsetMin: 210, departureOffsetMin: 210 },
    ],
  },
  {
    id: 'R2',
    name: 'Ohrid – Belgrade',
    price: {
      oneWayTicket: 1200,
      returnTicket: 2000,
    },
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'KIC', arrivalOffsetMin: 70, departureOffsetMin: 75 },
      { cityId: 'SKP', arrivalOffsetMin: 210, departureOffsetMin: 230 },
      { cityId: 'NIS', arrivalOffsetMin: 430, departureOffsetMin: 440 },
      { cityId: 'BEG', arrivalOffsetMin: 650, departureOffsetMin: 650 },
    ],
  },
];

export const RUNS: Run[] = [
  { id: 'R1-0600', routeId: 'R1', departureTimeLocal: '06:00' },
  { id: 'R1-1000', routeId: 'R1', departureTimeLocal: '10:00' },
  { id: 'R1-1400', routeId: 'R1', departureTimeLocal: '14:00' },
  { id: 'R1-1800', routeId: 'R1', departureTimeLocal: '18:00' },
  { id: 'R1-2100', routeId: 'R1', departureTimeLocal: '21:00' },

  { id: 'R2-0700', routeId: 'R2', departureTimeLocal: '07:00' },
  { id: 'R2-1700', routeId: 'R2', departureTimeLocal: '17:00' },
];
