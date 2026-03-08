import {City, Route, Run, TicketPrice} from '../components/trip-selector/trip-selector.models';

export type Locale = 'mk' | 'en';

export const CITY_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  OHR: { mk: 'Охрид', en: 'Ohrid' },
  RES: { mk: 'Ресен', en: 'Resen' },
  BIT: { mk: 'Битола', en: 'Bitola' },
  PRI: { mk: 'Прилеп', en: 'Prilep' },
  VEL: { mk: 'Велес', en: 'Veles' },
  STI: { mk: 'Штип', en: 'Štip' },
  KOC: { mk: 'Кочани', en: 'Kochani' },
  KAV: { mk: 'Кавадарци', en: 'Kavadarci' },
  KIC: { mk: 'Кичево', en: 'Kichevo' },
  GOS: { mk: 'Гостивар', en: 'Gostivar' },
  TET: { mk: 'Тетово', en: 'Tetovo' },
  SKP: { mk: 'Скопје', en: 'Skopje' },
  KUM: { mk: 'Куманово', en: 'Kumanovo' },

  // Serbia
  VRA: { mk: 'Врање', en: 'Vranje' },
  LES: { mk: 'Лесковац', en: 'Leskovac' },
  NIS: { mk: 'Ниш', en: 'Niš' },
  JAG: { mk: 'Јагодина', en: 'Jagodina' },
  BEG: { mk: 'Белград', en: 'Belgrade' }
};

export const CITY_INFO_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  OHR: {
    mk: 'Патувајте до бисерот на Балканот. Најфреквентни линии со поаѓања во текот на целиот ден.',
    en: 'Travel to the pearl of the Balkans. Frequent departures throughout the day.'
  },
  BIT: {
    mk: 'Поврзете се со градот на конзулите. Редовни линии преку Ресен.',
    en: 'Connect to the city of consuls. Regular routes via Resen.'
  },
  KOC: {
    mk: 'Директни линии до градот преку Велес и Штип.',
    en: 'Direct routes to the city via Veles and Štip.'
  },
  SKP: {
    mk: 'Директни линии до нашиот главен град. Повеќе поаѓања дневно.',
    en: 'Direct routes to our capital city. Multiple departures daily.'
  },
  NIS: {
    mk: 'Секоја вечер линија до главниот град на Србија.',
    en: 'Every night a route to the capital of Serbia.'
  },
  BEG: {
    mk: 'Секоја вечер линија до еден од најголемите градови во Србија.',
    en: 'Every night a route to one of the largest cities in Serbia.'
  }
};

export const CITIES: City[] = [
  { id: 'OHR', name: 'Ohrid' },
  { id: 'RES', name: 'Resen' },
  { id: 'BIT', name: 'Bitola' },
  { id: 'PRI', name: 'Prilep' },
  { id: 'VEL', name: 'Veles' },
  { id: 'STI', name: 'Štip' },
  { id: 'KOC', name: 'Kochani' },
  { id: 'KAV', name: 'Kavadarci' },
  { id: 'KIC', name: 'Kichevo' },
  { id: 'GOS', name: 'Gostivar' },
  { id: 'TET', name: 'Tetovo' },
  { id: 'SKP', name: 'Skopje' },
  { id: 'KUM', name: 'Kumanovo' },

  // Srbija
  { id: 'VRA', name: 'Vranje' },
  { id: 'LES', name: 'Leskovac' },
  { id: 'NIS', name: 'Niš' },
  { id: 'JAG', name: 'Jagodina' },
  { id: 'BEG', name: 'Belgrade' },
];

const getPartialRoutes = (keys: string[]): Record<string, TicketPrice> => {
  return keys.reduce((acc, key) => {
    if (pricesByRoutes[key]) {
      acc[key] = pricesByRoutes[key];
    }
    return acc;
  }, {} as Record<string, TicketPrice>);
};

export const pricesByRoutes: Record<string, TicketPrice> = {
  // --- OHR Departures ---
  'OHR-RES': { oneWayTicket: 250, returnTicket: 390 },
  'OHR-BIT': { oneWayTicket: 350, returnTicket: 550 },
  'OHR-PRI': { oneWayTicket: 570, returnTicket: 920 },
  'OHR-VEL': { oneWayTicket: 830, returnTicket: 1320 },
  'OHR-STI': { oneWayTicket: 870, returnTicket: 1430 },
  'OHR-KOC': { oneWayTicket: 990, returnTicket: 1540 },
  'OHR-KIC': { oneWayTicket: 420, returnTicket: 550 },
  'OHR-SKP': { oneWayTicket: 850, returnTicket: 1200 },
  'OHR-VRA': { oneWayTicket: 1100, returnTicket: 2100 },
  'OHR-LES': { oneWayTicket: 1380, returnTicket: 2640 },
  'OHR-NIS': { oneWayTicket: 1580, returnTicket: 2920 },
  'OHR-JAG': { oneWayTicket: 2090, returnTicket: 3960 },
  'OHR-BEG': { oneWayTicket: 2370, returnTicket: 4350 },

  // --- RES Departures ---
  'RES-OHR': { oneWayTicket: 250, returnTicket: 390 },
  'RES-BIT': { oneWayTicket: 170, returnTicket: 360 },
  'RES-PRI': { oneWayTicket: 360, returnTicket: 550 },
  'RES-VEL': { oneWayTicket: 630, returnTicket: 1100 },
  'RES-STI': { oneWayTicket: 720, returnTicket: 1320 },
  'RES-KAV': { oneWayTicket: 660, returnTicket: 860 },
  'RES-KOC': { oneWayTicket: 770, returnTicket: 1430 },
  'RES-VRA': { oneWayTicket: 1540, returnTicket: 2420 },
  'RES-LES': { oneWayTicket: 1650, returnTicket: 2640 },
  'RES-NIS': { oneWayTicket: 1930, returnTicket: 3170 },
  'RES-JAG': { oneWayTicket: 2150, returnTicket: 3850 },
  'RES-BEG': { oneWayTicket: 2530, returnTicket: 4350 },

  // --- BIT Departures ---
  'BIT-OHR': { oneWayTicket: 350, returnTicket: 550 },
  'BIT-RES': { oneWayTicket: 170, returnTicket: 360 },
  'BIT-PRI': { oneWayTicket: 180, returnTicket: 330 },
  'BIT-VEL': { oneWayTicket: 520, returnTicket: 880 },
  'BIT-KAV': { oneWayTicket: 500, returnTicket: 660 },
  'BIT-STI': { oneWayTicket: 580, returnTicket: 1100 },
  'BIT-KOC': { oneWayTicket: 680, returnTicket: 1210 },
  'BIT-SKP': { oneWayTicket: 700, returnTicket: 990 },
  'BIT-VRA': { oneWayTicket: 1430, returnTicket: 2090 },
  'BIT-LES': { oneWayTicket: 1600, returnTicket: 2370 },
  'BIT-NIS': { oneWayTicket: 1820, returnTicket: 3030 },
  'BIT-JAG': { oneWayTicket: 2090, returnTicket: 3580 },
  'BIT-BEG': { oneWayTicket: 2370, returnTicket: 4090 },

  // --- PRI Departures ---
  'PRI-BIT': { oneWayTicket: 180, returnTicket: 330 },
  'PRI-RES': { oneWayTicket: 360, returnTicket: 550 },
  'PRI-OHR': { oneWayTicket: 570, returnTicket: 920 },
  'PRI-KAV': { oneWayTicket: 310, returnTicket: 390 },
  'PRI-VEL': { oneWayTicket: 400, returnTicket: 660 },
  'PRI-STI': { oneWayTicket: 540, returnTicket: 940 },
  'PRI-KOC': { oneWayTicket: 640, returnTicket: 1050 },
  'PRI-SKP': { oneWayTicket: 530, returnTicket: 940 },
  'PRI-VRA': { oneWayTicket: 1100, returnTicket: 1980 },
  'PRI-LES': { oneWayTicket: 1320, returnTicket: 2260 },
  'PRI-NIS': { oneWayTicket: 1540, returnTicket: 2920 },
  'PRI-JAG': { oneWayTicket: 1870, returnTicket: 3410 },
  'PRI-BEG': { oneWayTicket: 2260, returnTicket: 3960 },

  // --- VEL Departures ---
  'VEL-PRI': { oneWayTicket: 400, returnTicket: 660 },
  'VEL-STI': { oneWayTicket: 200, returnTicket: 400 },
  'VEL-KOC': { oneWayTicket: 310, returnTicket: 500 },
  'VEL-SKP': { oneWayTicket: 440, returnTicket: 660 },
  'VEL-KAV': { oneWayTicket: 240, returnTicket: 400 },
  'VEL-BIT': { oneWayTicket: 520, returnTicket: 880 },
  'VEL-OHR': { oneWayTicket: 830, returnTicket: 1320 },
  'VEL-RES': { oneWayTicket: 630, returnTicket: 1100 },
  'VEL-VRA': { oneWayTicket: 880, returnTicket: 1320 },
  'VEL-LES': { oneWayTicket: 1050, returnTicket: 1700 },
  'VEL-NIS': { oneWayTicket: 1100, returnTicket: 2090 },
  'VEL-JAG': { oneWayTicket: 1600, returnTicket: 2530 },
  'VEL-BEG': { oneWayTicket: 1930, returnTicket: 3300 },

  // --- STI Departures ---
  'STI-VEL': { oneWayTicket: 200, returnTicket: 400 },
  'STI-KOC': { oneWayTicket: 150, returnTicket: 280 },
  'STI-PRI': { oneWayTicket: 540, returnTicket: 940 },
  'STI-BIT': { oneWayTicket: 580, returnTicket: 1100 },
  'STI-OHR': { oneWayTicket: 870, returnTicket: 1430 },
  'STI-RES': { oneWayTicket: 720, returnTicket: 1320 },

  // --- KOC Departures ---
  'KOC-STI': { oneWayTicket: 150, returnTicket: 280 },
  'KOC-VEL': { oneWayTicket: 310, returnTicket: 500 },
  'KOC-BIT': { oneWayTicket: 680, returnTicket: 1210 },
  'KOC-OHR': { oneWayTicket: 990, returnTicket: 1540 },
  'KOC-RES': { oneWayTicket: 770, returnTicket: 1430 },
  'KOC-PRI': { oneWayTicket: 610, returnTicket: 1050 },

  // --- KAV Departures ---
  'KAV-VRA': { oneWayTicket: 1050, returnTicket: 1600 },
  'KAV-LES': { oneWayTicket: 1210, returnTicket: 1980 },
  'KAV-NIS': { oneWayTicket: 1380, returnTicket: 2370 },
  'KAV-JAG': { oneWayTicket: 1820, returnTicket: 2920 },
  'KAV-BEG': { oneWayTicket: 2150, returnTicket: 3580 },

  // --- KIC Departures ---
  'KIC-OHR': { oneWayTicket: 420, returnTicket: 550 },
  'KIC-SKP': { oneWayTicket: 460, returnTicket: 660 },
  'KIC-VRA': { oneWayTicket: 990, returnTicket: 1700 },
  'KIC-LES': { oneWayTicket: 1210, returnTicket: 2090 },
  'KIC-NIS': { oneWayTicket: 1380, returnTicket: 2530 },
  'KIC-JAG': { oneWayTicket: 1760, returnTicket: 3300 },
  'KIC-BEG': { oneWayTicket: 2150, returnTicket: 3960 },

  // --- GOS Departures ---
  'GOS-VRA': { oneWayTicket: 940, returnTicket: 1600 },
  'GOS-LES': { oneWayTicket: 990, returnTicket: 1870 },
  'GOS-NIS': { oneWayTicket: 1100, returnTicket: 1980 },
  'GOS-JAG': { oneWayTicket: 1430, returnTicket: 2640 },
  'GOS-BEG': { oneWayTicket: 1930, returnTicket: 3300 },

  // --- TET Departures ---
  'TET-VRA': { oneWayTicket: 880, returnTicket: 1490 },
  'TET-LES': { oneWayTicket: 940, returnTicket: 1700 },
  'TET-NIS': { oneWayTicket: 990, returnTicket: 1760 },
  'TET-JAG': { oneWayTicket: 1380, returnTicket: 2530 },
  'TET-BEG': { oneWayTicket: 1820, returnTicket: 3190 },

  // --- SKP Departures ---
  'SKP-OHR': { oneWayTicket: 850, returnTicket: 1200 },
  'SKP-KIC': { oneWayTicket: 460, returnTicket: 660 },
  'SKP-VRA': { oneWayTicket: 550, returnTicket: 940 },
  'SKP-LES': { oneWayTicket: 720, returnTicket: 1210 },
  'SKP-NIS': { oneWayTicket: 880, returnTicket: 1430 },
  'SKP-JAG': { oneWayTicket: 1160, returnTicket: 1980 },
  'SKP-BEG': { oneWayTicket: 1760, returnTicket: 3030 },
  'SKP-RES': { oneWayTicket: 770, returnTicket: 1210 },
  'SKP-BIT': { oneWayTicket: 700, returnTicket: 990 },
  'SKP-PRI': { oneWayTicket: 530, returnTicket: 940 },
  'SKP-KAV': { oneWayTicket: 440, returnTicket: 660 },
  'SKP-VEL': { oneWayTicket: 200, returnTicket: 290 },

  // --- KUM Departures ---
  'KUM-VRA': { oneWayTicket: 440, returnTicket: 940 },
  'KUM-LES': { oneWayTicket: 640, returnTicket: 1100 },
  'KUM-NIS': { oneWayTicket: 770, returnTicket: 1320 },
  'KUM-JAG': { oneWayTicket: 1050, returnTicket: 1980 },
  'KUM-BEG': { oneWayTicket: 1540, returnTicket: 2640 },

  // --- VRA (Vranje) Departures ---
  'VRA-OHR': { oneWayTicket: 1100, returnTicket: 2100 },
  'VRA-RES': { oneWayTicket: 1540, returnTicket: 2420 },
  'VRA-BIT': { oneWayTicket: 1430, returnTicket: 2090 },
  'VRA-PRI': { oneWayTicket: 1100, returnTicket: 1980 },
  'VRA-VEL': { oneWayTicket: 880, returnTicket: 1320 },
  'VRA-KAV': { oneWayTicket: 1050, returnTicket: 1600 },
  'VRA-KIC': { oneWayTicket: 990, returnTicket: 1700 },
  'VRA-GOS': { oneWayTicket: 940, returnTicket: 1600 },
  'VRA-TET': { oneWayTicket: 880, returnTicket: 1490 },
  'VRA-SKP': { oneWayTicket: 550, returnTicket: 940 },
  'VRA-KUM': { oneWayTicket: 440, returnTicket: 940 },

// --- LES (Leskovac) Departures ---
  'LES-OHR': { oneWayTicket: 1380, returnTicket: 2640 },
  'LES-RES': { oneWayTicket: 1650, returnTicket: 2640 },
  'LES-BIT': { oneWayTicket: 1600, returnTicket: 2370 },
  'LES-PRI': { oneWayTicket: 1320, returnTicket: 2260 },
  'LES-VEL': { oneWayTicket: 1050, returnTicket: 1700 },
  'LES-KAV': { oneWayTicket: 1210, returnTicket: 1980 },
  'LES-KIC': { oneWayTicket: 1210, returnTicket: 2090 },
  'LES-GOS': { oneWayTicket: 990, returnTicket: 1870 },
  'LES-TET': { oneWayTicket: 940, returnTicket: 1700 },
  'LES-SKP': { oneWayTicket: 720, returnTicket: 1210 },
  'LES-KUM': { oneWayTicket: 640, returnTicket: 1100 },

// --- NIS (Niš) Departures ---
  'NIS-OHR': { oneWayTicket: 1580, returnTicket: 2920 },
  'NIS-RES': { oneWayTicket: 1930, returnTicket: 3170 },
  'NIS-BIT': { oneWayTicket: 1820, returnTicket: 3030 },
  'NIS-PRI': { oneWayTicket: 1540, returnTicket: 2920 },
  'NIS-VEL': { oneWayTicket: 1100, returnTicket: 2090 },
  'NIS-KAV': { oneWayTicket: 1380, returnTicket: 2370 },
  'NIS-KIC': { oneWayTicket: 1380, returnTicket: 2530 },
  'NIS-GOS': { oneWayTicket: 1100, returnTicket: 1980 },
  'NIS-TET': { oneWayTicket: 990, returnTicket: 1760 },
  'NIS-SKP': { oneWayTicket: 880, returnTicket: 1430 },
  'NIS-KUM': { oneWayTicket: 770, returnTicket: 1320 },

// --- JAG (Jagodina) Departures ---
  'JAG-OHR': { oneWayTicket: 2090, returnTicket: 3960 },
  'JAG-RES': { oneWayTicket: 2150, returnTicket: 3850 },
  'JAG-BIT': { oneWayTicket: 2090, returnTicket: 3580 },
  'JAG-PRI': { oneWayTicket: 1870, returnTicket: 3410 },
  'JAG-VEL': { oneWayTicket: 1600, returnTicket: 2530 },
  'JAG-KAV': { oneWayTicket: 1820, returnTicket: 2920 },
  'JAG-KIC': { oneWayTicket: 1760, returnTicket: 3300 },
  'JAG-GOS': { oneWayTicket: 1430, returnTicket: 2640 },
  'JAG-TET': { oneWayTicket: 1380, returnTicket: 2530 },
  'JAG-SKP': { oneWayTicket: 1160, returnTicket: 1980 },
  'JAG-KUM': { oneWayTicket: 1050, returnTicket: 1980 },

// --- BEG (Belgrade) Departures ---
  'BEG-OHR': { oneWayTicket: 2370, returnTicket: 4350 },
  'BEG-RES': { oneWayTicket: 2530, returnTicket: 4350 },
  'BEG-BIT': { oneWayTicket: 2370, returnTicket: 4090 },
  'BEG-PRI': { oneWayTicket: 2260, returnTicket: 3960 },
  'BEG-VEL': { oneWayTicket: 1930, returnTicket: 3300 },
  'BEG-KAV': { oneWayTicket: 2150, returnTicket: 3580 },
  'BEG-KIC': { oneWayTicket: 2150, returnTicket: 3960 },
  'BEG-GOS': { oneWayTicket: 1930, returnTicket: 3300 },
  'BEG-TET': { oneWayTicket: 1820, returnTicket: 3190 },
  'BEG-SKP': { oneWayTicket: 1760, returnTicket: 3030 },
  'BEG-KUM': { oneWayTicket: 1540, returnTicket: 2640 },
};

// TODO: Update student tickets wherever they are available
export const ROUTES: Route[] = [
  {
    id: 'R1',
    name: 'OHR – SKP',
    prices: getPartialRoutes(['OHR-SKP', 'OHR-KIC', 'KIC-SKP']),
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'KIC', arrivalOffsetMin: 60, departureOffsetMin: 60 },
      { cityId: 'SKP', arrivalOffsetMin: 180, departureOffsetMin: 180 },
    ],
  },
  {
    id: 'R2',
    name: 'SKP – OHR',
    prices: getPartialRoutes(['SKP-OHR', 'SKP-KIC', 'KIC-OHR']),
    stops: [
      { cityId: 'SKP', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'KIC', arrivalOffsetMin: 120, departureOffsetMin: 120 },
      { cityId: 'OHR', arrivalOffsetMin: 180, departureOffsetMin: 180 },
    ],
  },
  {
    id: 'R3',
    name: 'OHR – BEG',
    prices: getPartialRoutes([
      'OHR-VRA', 'OHR-LES', 'OHR-NIS', 'OHR-JAG', 'OHR-BEG',
      'KIC-VRA', 'KIC-LES', 'KIC-NIS', 'KIC-JAG', 'KIC-BEG',
      'GOS-VRA', 'GOS-LES', 'GOS-NIS', 'GOS-JAG', 'GOS-BEG',
      'TET-VRA', 'TET-LES', 'TET-NIS', 'TET-JAG', 'TET-BEG',
      'SKP-VRA', 'SKP-LES', 'SKP-NIS', 'SKP-JAG', 'SKP-BEG',
      'KUM-VRA', 'KUM-LES', 'KUM-NIS', 'KUM-JAG', 'KUM-BEG',
    ]),
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0,   departureOffsetMin: 0 },
      { cityId: 'KIC', arrivalOffsetMin: 60,  departureOffsetMin: 60 },
      { cityId: 'GOS', arrivalOffsetMin: 105, departureOffsetMin: 105 },
      { cityId: 'TET', arrivalOffsetMin: 165, departureOffsetMin: 165 },
      { cityId: 'SKP', arrivalOffsetMin: 225, departureOffsetMin: 225 },
      { cityId: 'KUM', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'VRA', arrivalOffsetMin: 270, departureOffsetMin: 270 },// TODO: vujce ke azurirat
      { cityId: 'LES', arrivalOffsetMin: 270, departureOffsetMin: 270 },// TODO: vujce ke azurirat
      { cityId: 'NIS', arrivalOffsetMin: 270, departureOffsetMin: 270 },// TODO: vujce ke azurirat
      { cityId: 'JAG', arrivalOffsetMin: 270, departureOffsetMin: 270 },// TODO: vujce ke azurirat
      { cityId: 'BEG', arrivalOffsetMin: 645, departureOffsetMin: 645 },// TODO: vujce ke azurirat
    ],
  },
  {
    id: 'R4',
    name: 'BEG – OHR',
    prices: getPartialRoutes([
      'BEG-KUM', 'BEG-SKP', 'BEG-TET', 'BEG-GOS', 'BEG-KIC', 'BEG-OHR',
      'JAG-KUM', 'JAG-SKP', 'JAG-TET', 'JAG-GOS', 'JAG-KIC', 'JAG-OHR',
      'NIS-KUM', 'NIS-SKP', 'NIS-TET', 'NIS-GOS', 'NIS-KIC', 'NIS-OHR',
      'LES-KUM', 'LES-SKP', 'LES-TET', 'LES-GOS', 'LES-KIC', 'LES-OHR',
      'VRA-KUM', 'VRA-SKP', 'VRA-TET', 'VRA-GOS', 'VRA-KIC', 'VRA-OHR',
    ]),
    stops: [
      { cityId: 'BEG', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'JAG', arrivalOffsetMin: 100, departureOffsetMin: 100 },
      { cityId: 'NIS', arrivalOffsetMin: 210, departureOffsetMin: 210 },
      { cityId: 'LES', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'VRA', arrivalOffsetMin: 330, departureOffsetMin: 330 },
      { cityId: 'KUM', arrivalOffsetMin: 510, departureOffsetMin: 510 },
      { cityId: 'SKP', arrivalOffsetMin: 570, departureOffsetMin: 570 },
      { cityId: 'TET', arrivalOffsetMin: 525, departureOffsetMin: 525 },
      { cityId: 'GOS', arrivalOffsetMin: 585, departureOffsetMin: 585 },
      { cityId: 'KIC', arrivalOffsetMin: 630, departureOffsetMin: 630 },
      { cityId: 'OHR', arrivalOffsetMin: 690, departureOffsetMin: 690 },
    ],
  },
  {
    id: 'R5',
    name: 'OHR – BEG',
    prices: getPartialRoutes([
      'RES-VRA', 'RES-LES', 'RES-NIS', 'RES-JAG', 'OHR-BEG',
      'BIT-VRA', 'BIT-LES', 'BIT-NIS', 'BIT-JAG', 'BIT-BEG',
      'PRI-VRA', 'PRI-LES', 'PRI-NIS', 'PRI-JAG', 'PRI-BEG',
      'KAV-VRA', 'KAV-LES', 'KAV-NIS', 'KAV-JAG', 'KAV-BEG',
      'VEL-VRA', 'VEL-LES', 'VEL-NIS', 'VEL-JAG', 'VEL-BEG',
    ]),
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0,   departureOffsetMin: 0 },
      { cityId: 'RES', arrivalOffsetMin: 40,  departureOffsetMin: 40 },
      { cityId: 'BIT', arrivalOffsetMin: 105, departureOffsetMin: 105 },
      { cityId: 'PRI', arrivalOffsetMin: 165, departureOffsetMin: 165 },
      { cityId: 'KAV', arrivalOffsetMin: 240, departureOffsetMin: 240 },
      { cityId: 'VEL', arrivalOffsetMin: 285, departureOffsetMin: 285 },
      { cityId: 'SKP', arrivalOffsetMin: 360, departureOffsetMin: 360 },
      { cityId: 'KUM', arrivalOffsetMin: 405, departureOffsetMin: 405 },
      { cityId: 'VRA', arrivalOffsetMin: 405, departureOffsetMin: 405 },// TODO: vujce ke azurirat
      { cityId: 'LES', arrivalOffsetMin: 405, departureOffsetMin: 405 },// TODO: vujce ke azurirat
      { cityId: 'NIS', arrivalOffsetMin: 405, departureOffsetMin: 405 },// TODO: vujce ke azurirat
      { cityId: 'JAG', arrivalOffsetMin: 405, departureOffsetMin: 405 },// TODO: vujce ke azurirat
      { cityId: 'BEG', arrivalOffsetMin: 780, departureOffsetMin: 780 },
    ],
  },
  {
    id: 'R6',
    name: 'BEG – OHR',
    prices: getPartialRoutes([
      'BEG-KUM', 'BEG-SKP', 'BEG-KAV', 'BEG-VEL', 'BEG-PRI', 'BEG-BIT', 'BEG-RES', 'BEG-OHR',
      'JAG-KUM', 'JAG-SKP', 'JAG-KAV', 'JAG-VEL', 'JAG-PRI', 'JAG-BIT', 'JAG-RES', 'JAG-OHR',
      'NIS-KUM', 'NIS-SKP', 'NIS-KAV', 'NIS-VEL', 'NIS-PRI', 'NIS-BIT', 'NIS-RES', 'NIS-OHR',
      'LES-KUM', 'LES-SKP', 'LES-KAV', 'LES-VEL', 'LES-PRI', 'LES-BIT', 'LES-RES', 'LES-OHR',
      'VRA-KUM', 'VRA-SKP', 'VRA-KAV', 'VRA-VEL', 'VRA-PRI', 'VRA-BIT', 'VRA-RES', 'VRA-OHR',
    ]),
    stops: [
      { cityId: 'BEG', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'JAG', arrivalOffsetMin: 100, departureOffsetMin: 100 },
      { cityId: 'NIS', arrivalOffsetMin: 210, departureOffsetMin: 210 },
      { cityId: 'LES', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'VRA', arrivalOffsetMin: 330, departureOffsetMin: 330 },
      { cityId: 'KUM', arrivalOffsetMin: 510, departureOffsetMin: 510 },
      { cityId: 'SKP', arrivalOffsetMin: 570, departureOffsetMin: 570 },
      { cityId: 'KAV', arrivalOffsetMin: 540, departureOffsetMin: 540 },
      { cityId: 'VEL', arrivalOffsetMin: 575, departureOffsetMin: 575 },
      { cityId: 'PRI', arrivalOffsetMin: 640, departureOffsetMin: 640 },
      { cityId: 'BIT', arrivalOffsetMin: 685, departureOffsetMin: 685 },
      { cityId: 'RES', arrivalOffsetMin: 725, departureOffsetMin: 725 },
      { cityId: 'OHR', arrivalOffsetMin: 760, departureOffsetMin: 760 },
    ],
  },
  {
    id: 'R7',
    name: 'OHR – KOC',
    prices: getPartialRoutes([
      'OHR-RES', 'OHR-BIT', 'OHR-PRI', 'OHR-VEL', 'OHR-STI', 'OHR-KOC',
      'RES-BIT', 'RES-PRI', 'RES-VEL', 'RES-STI', 'RES-KOC',
      'BIT-PRI', 'BIT-VEL', 'BIT-STI', 'BIT-KOC',
      'PRI-VEL', 'PRI-STI', 'PRI-KOC',
      'VEL-STI', 'VEL-KOC',
    ]),
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'RES', arrivalOffsetMin: 40,  departureOffsetMin: 40 },
      { cityId: 'BIT', arrivalOffsetMin: 105, departureOffsetMin: 105 },
      { cityId: 'PRI', arrivalOffsetMin: 165, departureOffsetMin: 165 },
      { cityId: 'VEL', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'STI', arrivalOffsetMin: 315, departureOffsetMin: 315 },
      { cityId: 'KOC', arrivalOffsetMin: 345, departureOffsetMin: 345 },
    ],
  },
  {
    id: 'R8',
    name: 'KOC – OHR',
    prices: getPartialRoutes([
      'KOC-STI', 'KOC-VEL', 'KOC-PRI', 'KOC-BIT', 'KOC-RES', 'KOC-OHR',
      'STI-VEL', 'STI-PRI', 'STI-BIT', 'STI-RES', 'STI-OHR',
      'VEL-PRI', 'VEL-BIT', 'VEL-RES', 'VEL-OHR',
      'PRI-BIT', 'PRI-RES', 'PRI-OHR',
      'BIT-RES', 'BIT-OHR',
      'RES-OHR'
    ]),
    stops: [
      { cityId: 'KOC', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'STI', arrivalOffsetMin: 30, departureOffsetMin: 30 },
      { cityId: 'VEL', arrivalOffsetMin: 75, departureOffsetMin: 75 },
      { cityId: 'PRI', arrivalOffsetMin: 180, departureOffsetMin: 180 },
      { cityId: 'BIT', arrivalOffsetMin: 240, departureOffsetMin: 240 },
      { cityId: 'RES', arrivalOffsetMin: 280, departureOffsetMin: 280 },
      { cityId: 'OHR', arrivalOffsetMin: 320, departureOffsetMin: 320 },
    ],
  },
  {
    id: 'R9',
    name: 'OHR – SKP',
    prices: getPartialRoutes([
      'OHR-RES', 'OHR-BIT', 'OHR-PRI', 'OHR-VEL', 'OHR-SKP',
      'RES-BIT', 'RES-PRI', 'RES-VEL', 'RES-SKP',
      'BIT-PRI', 'BIT-VEL', 'BIT-SKP',
      'PRI-VEL', 'PRI-SKP',
      'VEL-SKP'
    ]),
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0,   departureOffsetMin: 0 },
      { cityId: 'RES', arrivalOffsetMin: 40,  departureOffsetMin: 40 },
      { cityId: 'BIT', arrivalOffsetMin: 105, departureOffsetMin: 105 },
      { cityId: 'PRI', arrivalOffsetMin: 165, departureOffsetMin: 165 },
      { cityId: 'VEL', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'SKP', arrivalOffsetMin: 330, departureOffsetMin: 330 },
    ],
  },
  {
    id: 'R10',
    name: 'SKP – OHR',
    prices: getPartialRoutes([
      'SKP-VEL', 'SKP-PRI', 'SKP-BIT', 'SKP-RES', 'SKP-OHR',
      'VEL-PRI', 'VEL-BIT', 'VEL-RES', 'VEL-OHR',
      'PRI-BIT', 'PRI-RES', 'PRI-OHR',
      'BIT-RES', 'BIT-OHR',
      'RES-OHR'
    ]),
    stops: [
      { cityId: 'SKP', arrivalOffsetMin: 0,   departureOffsetMin: 0 },
      { cityId: 'VEL', arrivalOffsetMin: 60,  departureOffsetMin: 60 },
      { cityId: 'PRI', arrivalOffsetMin: 165, departureOffsetMin: 165 },
      { cityId: 'BIT', arrivalOffsetMin: 225, departureOffsetMin: 225 },
      { cityId: 'RES', arrivalOffsetMin: 265, departureOffsetMin: 265 },
      { cityId: 'OHR', arrivalOffsetMin: 305, departureOffsetMin: 305 }
    ],
  },
];

export const RUNS: Run[] = [
  { id: 'R1-0530', routeId: 'R1', departureTimeLocal: '05:30' },
  { id: 'R1-1045', routeId: 'R1', departureTimeLocal: '10:45' },
  { id: 'R1-1500', routeId: 'R1', departureTimeLocal: '15:00' },
  { id: 'R1-1900', routeId: 'R1', departureTimeLocal: '19:00' },

  { id: 'R2-0800', routeId: 'R2', departureTimeLocal: '08:00' },
  { id: 'R2-1000', routeId: 'R2', departureTimeLocal: '10:00' },
  { id: 'R2-1630', routeId: 'R2', departureTimeLocal: '16:30' },
  { id: 'R2-1830', routeId: 'R2', departureTimeLocal: '18:30' },

  { id: 'R3-1745', routeId: 'R3', departureTimeLocal: '17:45' },

  { id: 'R4-2130', routeId: 'R4', departureTimeLocal: '21:30' },

  { id: 'R5-1610', routeId: 'R5', departureTimeLocal: '15:30' },

  { id: 'R6-2130', routeId: 'R6', departureTimeLocal: '21:30' },

  { id: 'R7-0600', routeId: 'R7', departureTimeLocal: '06:00' },

  { id: 'R8-1430', routeId: 'R8', departureTimeLocal: '14:30' },

  { id: 'R9-1000', routeId: 'R9', departureTimeLocal: '10:00' },

  { id: 'R10-1630', routeId: 'R10', departureTimeLocal: '16:30' },
];
