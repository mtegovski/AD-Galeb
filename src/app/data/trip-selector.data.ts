import {City, Route, Run, TicketPrice} from '../components/trip-selector/trip-selector.models';
import {Locale} from '../utils/languages.util';

export const CITY_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  OHR: { mk: 'Охрид', en: 'Ohrid', sr: 'Охрид' },
  RES: { mk: 'Ресен', en: 'Resen', sr: 'Ресен' },
  BIT: { mk: 'Битола', en: 'Bitola', sr: 'Битоља' },
  PRI: { mk: 'Прилеп', en: 'Prilep', sr: 'Прилеп' },
  VEL: { mk: 'Велес', en: 'Veles', sr: 'Велес' },
  STI: { mk: 'Штип', en: 'Štip', sr: 'Штип' },
  KOC: { mk: 'Кочани', en: 'Kochani', sr: 'Кочани' },
  KAV: { mk: 'Кавадарци', en: 'Kavadarci', sr: 'Кавадарци' },
  KIC: { mk: 'Кичево', en: 'Kichevo', sr: 'Кичево' },
  GOS: { mk: 'Гостивар', en: 'Gostivar', sr: 'Гостивар' },
  TET: { mk: 'Тетово', en: 'Tetovo', sr: 'Тетово' },
  SKP: { mk: 'Скопје', en: 'Skopje', sr: 'Скопље' },
  KUM: { mk: 'Куманово', en: 'Kumanovo', sr: 'Куманово' },

  // Serbia
  VRA: { mk: 'Врање', en: 'Vranje', sr: 'Врање' },
  LES: { mk: 'Лесковац', en: 'Leskovac', sr: 'Лесковац' },
  NIS: { mk: 'Ниш', en: 'Niš', sr: 'Ниш' },
  JAG: { mk: 'Јагодина', en: 'Jagodina', sr: 'Јагодина' },
  BEG: { mk: 'Белград', en: 'Belgrade', sr: 'Београд' },

  // Local cities/stops (Ohrid area)
  KOS: { mk: 'Косел', en: 'Kosel', sr: 'Косел' },
  LIV: { mk: 'Ливоишта', en: 'Livoishta', sr: 'Ливоишта' },
  PES: { mk: 'Пештани', en: 'Peshtani', sr: 'Пештани' },
  VELG: { mk: 'Велгошти', en: 'Velgoshti', sr: 'Велгошти' },
  OTP: { mk: 'Отпад', en: 'Otpad', sr: 'Отпад' },
  LESK: { mk: 'Лескоец', en: 'Leskoec', sr: 'Лескоец' },
  VAP: { mk: 'Вапила', en: 'Vapila', sr: 'Вапила' },
  BIZ: { mk: 'Билјанини Извори', en: 'Biljanini Izvori', sr: 'Биљанини Извори' },
  RAC: { mk: 'Рача', en: 'Racha', sr: 'Рача' },
  STF: { mk: 'Свети Стефан', en: 'Sveti Stefan', sr: 'Свети Стефан' },
  GRA: { mk: 'Гранит', en: 'Granit', sr: 'Гранит' },
  MET: { mk: 'Метропол', en: 'Metropol', sr: 'Метропол' },
  LAG: { mk: 'Лагадин', en: 'Lagadin', sr: 'Лагадин' },
  ELE: { mk: 'Елешец', en: 'Eleshec', sr: 'Елешец' },
};

export const CITY_INFO_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  OHR: {
    mk: 'Патувајте до бисерот на Балканот. Најфреквентни линии со поаѓања во текот на целиот ден.',
    en: 'Travel to the pearl of the Balkans. Frequent departures throughout the day.',
    sr: 'Путујте до бисера Балкана. Најфреквентније линије са поласцима током целог дана.'
  },
  BIT: {
    mk: 'Поврзете се со градот на конзулите. Редовни линии преку Ресен.',
    en: 'Connect to the city of consuls. Regular routes via Resen.',
    sr: 'Повежите се са градом конзула. Редовне линије преко Ресена.'
  },
  KOC: {
    mk: 'Директни линии до градот преку Велес и Штип.',
    en: 'Direct routes to the city via Veles and Štip.',
    sr: 'Директне линије до града преко Велеса и Штипа.'
  },
  SKP: {
    mk: 'Директни линии до нашиот главен град. Повеќе поаѓања дневно.',
    en: 'Direct routes to our capital city. Multiple departures daily.',
    sr: 'Директне линије до нашег главног града. Више полазака дневно.'
  },
  BEG: {
    mk: 'Секоја вечер линија до главниот град на Србија.',
    en: 'Every night a route to the capital of Serbia.',
    sr: 'Сваке вечери линија до главног града Србије.'
  },
  NIS: {
    mk: 'Секоја вечер линија до еден од најголемите градови во Србија.',
    en: 'Every night a route to one of the largest cities in Serbia.',
    sr: 'Сваке вечери линија до једног од највећих градова у Србији.'
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
  'OHR-RES': { oneWayTicketMKD: 250, returnTicketMKD: 390 },
  'OHR-BIT': { oneWayTicketMKD: 350, returnTicketMKD: 550 },
  'OHR-PRI': { oneWayTicketMKD: 570, returnTicketMKD: 920 },
  'OHR-VEL': { oneWayTicketMKD: 830, returnTicketMKD: 1320 },
  'OHR-STI': { oneWayTicketMKD: 870, returnTicketMKD: 1430 },
  'OHR-KOC': { oneWayTicketMKD: 990, returnTicketMKD: 1540 },
  'OHR-KIC': { oneWayTicketMKD: 420, returnTicketMKD: 550 },
  'OHR-GOS': { oneWayTicketMKD: 500, returnTicketMKD: 790 },
  'OHR-TET': { oneWayTicketMKD: 610, returnTicketMKD: 880 },
  'OHR-SKP': { oneWayTicketMKD: 850, returnTicketMKD: 1200 },
  'OHR-KUM': { oneWayTicketMKD: 990 },
  'OHR-KAV': { oneWayTicketMKD: 850, returnTicketMKD: 1160 },
  'OHR-VRA': { oneWayTicketMKD: 1100, returnTicketMKD: 2100, oneWayTicketRSD: 2200, returnTicketRSD: 4130 },
  'OHR-LES': { oneWayTicketMKD: 1380, returnTicketMKD: 2640, oneWayTicketRSD: 2700, returnTicketRSD: 4510 },
  'OHR-NIS': { oneWayTicketMKD: 1580, returnTicketMKD: 2920, oneWayTicketRSD: 3080, returnTicketRSD: 5280 },
  'OHR-JAG': { oneWayTicketMKD: 2090, returnTicketMKD: 3960, oneWayTicketRSD: 3960, returnTicketRSD: 7760 },
  'OHR-BEG': { oneWayTicketMKD: 2370, returnTicketMKD: 4350, oneWayTicketRSD: 4620, returnTicketRSD: 7920 },

  // --- RES Departures ---
  'RES-OHR': { oneWayTicketMKD: 250, returnTicketMKD: 390 },
  'RES-BIT': { oneWayTicketMKD: 170, returnTicketMKD: 360 },
  'RES-PRI': { oneWayTicketMKD: 360, returnTicketMKD: 550 },
  'RES-VEL': { oneWayTicketMKD: 630, returnTicketMKD: 1100 },
  'RES-STI': { oneWayTicketMKD: 720, returnTicketMKD: 1320 },
  'RES-KAV': { oneWayTicketMKD: 660, returnTicketMKD: 860 },
  'RES-KOC': { oneWayTicketMKD: 770, returnTicketMKD: 1430 },
  'RES-SKP': { oneWayTicketMKD: 770, returnTicketMKD: 1210 },
  'RES-KUM': { oneWayTicketMKD: 830 },
  'RES-VRA': { oneWayTicketMKD: 1540, returnTicketMKD: 2420, oneWayTicketRSD: 2970, returnTicketRSD: 4620 },
  'RES-LES': { oneWayTicketMKD: 1650, returnTicketMKD: 2640, oneWayTicketRSD: 3250, returnTicketRSD: 5170 },
  'RES-NIS': { oneWayTicketMKD: 1930, returnTicketMKD: 3170, oneWayTicketRSD: 3740, returnTicketRSD: 6330 },
  'RES-JAG': { oneWayTicketMKD: 2150, returnTicketMKD: 3850, oneWayTicketRSD: 4130, returnTicketRSD: 7480 },
  'RES-BEG': { oneWayTicketMKD: 2530, returnTicketMKD: 4350, oneWayTicketRSD: 4950, returnTicketRSD: 7760 },

  // --- BIT Departures ---
  'BIT-OHR': { oneWayTicketMKD: 350, returnTicketMKD: 550 },
  'BIT-RES': { oneWayTicketMKD: 170, returnTicketMKD: 360 },
  'BIT-PRI': { oneWayTicketMKD: 180, returnTicketMKD: 330 },
  'BIT-VEL': { oneWayTicketMKD: 520, returnTicketMKD: 880 },
  'BIT-KAV': { oneWayTicketMKD: 500, returnTicketMKD: 660 },
  'BIT-STI': { oneWayTicketMKD: 580, returnTicketMKD: 1100 },
  'BIT-KOC': { oneWayTicketMKD: 680, returnTicketMKD: 1210 },
  'BIT-SKP': { oneWayTicketMKD: 700, returnTicketMKD: 990 },
  'BIT-KUM': { oneWayTicketMKD: 800 },
  'BIT-VRA': { oneWayTicketMKD: 1430, returnTicketMKD: 2090, oneWayTicketRSD: 2750, returnTicketRSD: 4120 },
  'BIT-LES': { oneWayTicketMKD: 1600, returnTicketMKD: 2370, oneWayTicketRSD: 3080, returnTicketRSD: 4620 },
  'BIT-NIS': { oneWayTicketMKD: 1820, returnTicketMKD: 3030, oneWayTicketRSD: 3580, returnTicketRSD: 5830 },
  'BIT-JAG': { oneWayTicketMKD: 2090, returnTicketMKD: 3580, oneWayTicketRSD: 3960, returnTicketRSD: 6990 },
  'BIT-BEG': { oneWayTicketMKD: 2370, returnTicketMKD: 4090, oneWayTicketRSD: 4620, returnTicketRSD: 7540 },

  // --- PRI Departures ---
  'PRI-BIT': { oneWayTicketMKD: 180, returnTicketMKD: 330 },
  'PRI-RES': { oneWayTicketMKD: 360, returnTicketMKD: 550 },
  'PRI-OHR': { oneWayTicketMKD: 570, returnTicketMKD: 920 },
  'PRI-KAV': { oneWayTicketMKD: 310, returnTicketMKD: 390 },
  'PRI-VEL': { oneWayTicketMKD: 400, returnTicketMKD: 660 },
  'PRI-STI': { oneWayTicketMKD: 540, returnTicketMKD: 940 },
  'PRI-KOC': { oneWayTicketMKD: 640, returnTicketMKD: 1050 },
  'PRI-SKP': { oneWayTicketMKD: 530, returnTicketMKD: 940 },
  'PRI-KUM': { oneWayTicketMKD: 660 },
  'PRI-VRA': { oneWayTicketMKD: 1100, returnTicketMKD: 1980, oneWayTicketRSD: 2200, returnTicketRSD: 3850 },
  'PRI-LES': { oneWayTicketMKD: 1320, returnTicketMKD: 2260, oneWayTicketRSD: 2640, returnTicketRSD: 4400 },
  'PRI-NIS': { oneWayTicketMKD: 1540, returnTicketMKD: 2920, oneWayTicketRSD: 2970, returnTicketRSD: 5720 },
  'PRI-JAG': { oneWayTicketMKD: 1870, returnTicketMKD: 3410, oneWayTicketRSD: 3630, returnTicketRSD: 6600 },
  'PRI-BEG': { oneWayTicketMKD: 2260, returnTicketMKD: 3960, oneWayTicketRSD: 4400, returnTicketRSD: 7320 },

  // --- VEL Departures ---
  'VEL-PRI': { oneWayTicketMKD: 400, returnTicketMKD: 660 },
  'VEL-STI': { oneWayTicketMKD: 200, returnTicketMKD: 400 },
  'VEL-KOC': { oneWayTicketMKD: 310, returnTicketMKD: 500 },
  'VEL-SKP': { oneWayTicketMKD: 440, returnTicketMKD: 660 },
  'VEL-KAV': { oneWayTicketMKD: 240, returnTicketMKD: 400 },
  'VEL-BIT': { oneWayTicketMKD: 520, returnTicketMKD: 880 },
  'VEL-OHR': { oneWayTicketMKD: 830, returnTicketMKD: 1320 },
  'VEL-RES': { oneWayTicketMKD: 630, returnTicketMKD: 1100 },
  'VEL-KUM': { oneWayTicketMKD: 550 },
  'VEL-VRA': { oneWayTicketMKD: 880, returnTicketMKD: 1320, oneWayTicketRSD: 1760, returnTicketRSD: 2530 },
  'VEL-LES': { oneWayTicketMKD: 1050, returnTicketMKD: 1700, oneWayTicketRSD: 2090, returnTicketRSD: 3300 },
  'VEL-NIS': { oneWayTicketMKD: 1100, returnTicketMKD: 2090, oneWayTicketRSD: 2200, returnTicketRSD: 4130 },
  'VEL-JAG': { oneWayTicketMKD: 1600, returnTicketMKD: 2530, oneWayTicketRSD: 3080, returnTicketRSD: 4900 },
  'VEL-BEG': { oneWayTicketMKD: 1930, returnTicketMKD: 3300, oneWayTicketRSD: 3630, returnTicketRSD: 6440 },

  // --- STI Departures ---
  'STI-VEL': { oneWayTicketMKD: 200, returnTicketMKD: 400 },
  'STI-KOC': { oneWayTicketMKD: 150, returnTicketMKD: 280 },
  'STI-PRI': { oneWayTicketMKD: 540, returnTicketMKD: 940 },
  'STI-BIT': { oneWayTicketMKD: 580, returnTicketMKD: 1100 },
  'STI-OHR': { oneWayTicketMKD: 870, returnTicketMKD: 1430 },
  'STI-RES': { oneWayTicketMKD: 720, returnTicketMKD: 1320 },

  // --- KOC Departures ---
  'KOC-STI': { oneWayTicketMKD: 150, returnTicketMKD: 280 },
  'KOC-VEL': { oneWayTicketMKD: 310, returnTicketMKD: 500 },
  'KOC-BIT': { oneWayTicketMKD: 680, returnTicketMKD: 1210 },
  'KOC-OHR': { oneWayTicketMKD: 990, returnTicketMKD: 1540 },
  'KOC-RES': { oneWayTicketMKD: 770, returnTicketMKD: 1430 },
  'KOC-PRI': { oneWayTicketMKD: 610, returnTicketMKD: 1050 },

  // --- KAV Departures ---
  'KAV-OHR': { oneWayTicketMKD: 850, returnTicketMKD: 1160 },
  'KAV-RES': { oneWayTicketMKD: 660, returnTicketMKD: 860 },
  'KAV-BIT': { oneWayTicketMKD: 500, returnTicketMKD: 660 },
  'KAV-PRI': { oneWayTicketMKD: 310, returnTicketMKD: 390 },
  'KAV-VEL': { oneWayTicketMKD: 240, returnTicketMKD: 400 },
  'KAV-SKP': { oneWayTicketMKD: 440, returnTicketMKD: 660 },
  'KAV-KUM': { oneWayTicketMKD: 550 },
  'KAV-VRA': { oneWayTicketMKD: 1050, returnTicketMKD: 1600, oneWayTicketRSD: 1980, returnTicketRSD: 3080 },
  'KAV-LES': { oneWayTicketMKD: 1210, returnTicketMKD: 1980, oneWayTicketRSD: 2420, returnTicketRSD: 3800 },
  'KAV-NIS': { oneWayTicketMKD: 1380, returnTicketMKD: 2370, oneWayTicketRSD: 2640, returnTicketRSD: 4620 },
  'KAV-JAG': { oneWayTicketMKD: 1820, returnTicketMKD: 2920, oneWayTicketRSD: 3520, returnTicketRSD: 5720 },
  'KAV-BEG': { oneWayTicketMKD: 2150, returnTicketMKD: 3580, oneWayTicketRSD: 4130, returnTicketRSD: 6990 },

  // --- KIC Departures ---
  'KIC-OHR': { oneWayTicketMKD: 420, returnTicketMKD: 550 },
  'KIC-SKP': { oneWayTicketMKD: 460, returnTicketMKD: 660 },
  'KIC-GOS': { oneWayTicketMKD: 220, returnTicketMKD: 330 },
  'KIC-TET': { oneWayTicketMKD: 260, returnTicketMKD: 400 },
  'KIC-KUM': { oneWayTicketMKD: 720 },
  'KIC-VRA': { oneWayTicketMKD: 990, returnTicketMKD: 1700, oneWayTicketRSD: 1930, returnTicketRSD: 3300 },
  'KIC-LES': { oneWayTicketMKD: 1210, returnTicketMKD: 2090, oneWayTicketRSD: 2310, returnTicketRSD: 4130 },
  'KIC-NIS': { oneWayTicketMKD: 1380, returnTicketMKD: 2530, oneWayTicketRSD: 2700, returnTicketRSD: 4900 },
  'KIC-JAG': { oneWayTicketMKD: 1760, returnTicketMKD: 3300, oneWayTicketRSD: 3300, returnTicketRSD: 6440 },
  'KIC-BEG': { oneWayTicketMKD: 2150, returnTicketMKD: 3960, oneWayTicketRSD: 4130, returnTicketRSD: 7760 },

  // --- GOS Departures ---
  'GOS-OHR': { oneWayTicketMKD: 500, returnTicketMKD: 790 },
  'GOS-KIC': { oneWayTicketMKD: 220, returnTicketMKD: 330 },
  'GOS-TET': { oneWayTicketMKD: 150 },
  'GOS-SKP': { oneWayTicketMKD: 330 },
  'GOS-KUM': { oneWayTicketMKD: 550 },
  'GOS-VRA': { oneWayTicketMKD: 940, returnTicketMKD: 1600, oneWayTicketRSD: 1760, returnTicketRSD: 3080 },
  'GOS-LES': { oneWayTicketMKD: 990, returnTicketMKD: 1870, oneWayTicketRSD: 1930, returnTicketRSD: 3630 },
  'GOS-NIS': { oneWayTicketMKD: 1100, returnTicketMKD: 1980, oneWayTicketRSD: 2090, returnTicketRSD: 3800 },
  'GOS-JAG': { oneWayTicketMKD: 1430, returnTicketMKD: 2640, oneWayTicketRSD: 2640, returnTicketRSD: 5170 },
  'GOS-BEG': { oneWayTicketMKD: 1930, returnTicketMKD: 3300, oneWayTicketRSD: 3800, returnTicketRSD: 6440 },

  // --- TET Departures ---
  'TET-OHR': { oneWayTicketMKD: 610, returnTicketMKD: 880 },
  'TET-KIC': { oneWayTicketMKD: 260, returnTicketMKD: 400 },
  'TET-GOS': { oneWayTicketMKD: 150 },
  'TET-SKP': { oneWayTicketMKD: 220 },
  'TET-KUM': { oneWayTicketMKD: 440 },
  'TET-VRA': { oneWayTicketMKD: 880, returnTicketMKD: 1490, oneWayTicketRSD: 1760, returnTicketRSD: 2860 },
  'TET-LES': { oneWayTicketMKD: 940, returnTicketMKD: 1700, oneWayTicketRSD: 1930, returnTicketRSD: 3360 },
  'TET-NIS': { oneWayTicketMKD: 990, returnTicketMKD: 1760, oneWayTicketRSD: 1930, returnTicketRSD: 3520 },
  'TET-JAG': { oneWayTicketMKD: 1380, returnTicketMKD: 2530, oneWayTicketRSD: 2530, returnTicketRSD: 4900 },
  'TET-BEG': { oneWayTicketMKD: 1820, returnTicketMKD: 3190, oneWayTicketRSD: 3580, returnTicketRSD: 6330 },

  // --- SKP Departures ---
  'SKP-OHR': { oneWayTicketMKD: 850, returnTicketMKD: 1200 },
  'SKP-KIC': { oneWayTicketMKD: 460, returnTicketMKD: 660 },
  'SKP-GOS': { oneWayTicketMKD: 330 },
  'SKP-TET': { oneWayTicketMKD: 220 },
  'SKP-KUM': { oneWayTicketMKD: 220 },
  'SKP-VRA': { oneWayTicketMKD: 550, returnTicketMKD: 940, oneWayTicketRSD: 990, returnTicketRSD: 1760 },
  'SKP-LES': { oneWayTicketMKD: 720, returnTicketMKD: 1210, oneWayTicketRSD: 1430, returnTicketRSD: 2370 },
  'SKP-NIS': { oneWayTicketMKD: 880, returnTicketMKD: 1430, oneWayTicketRSD: 1650, returnTicketRSD: 2860 },
  'SKP-JAG': { oneWayTicketMKD: 1160, returnTicketMKD: 1980, oneWayTicketRSD: 1980, returnTicketRSD: 3800 },
  'SKP-BEG': { oneWayTicketMKD: 1760, returnTicketMKD: 3030, oneWayTicketRSD: 3410, returnTicketRSD: 6830 },
  'SKP-RES': { oneWayTicketMKD: 770, returnTicketMKD: 1210 },
  'SKP-BIT': { oneWayTicketMKD: 700, returnTicketMKD: 990 },
  'SKP-PRI': { oneWayTicketMKD: 530, returnTicketMKD: 940 },
  'SKP-KAV': { oneWayTicketMKD: 440, returnTicketMKD: 660 },
  'SKP-VEL': { oneWayTicketMKD: 200, returnTicketMKD: 290 },

  // --- KUM Departures ---
  'KUM-OHR': { oneWayTicketMKD: 990 },
  'KUM-KIC': { oneWayTicketMKD: 720 },
  'KUM-GOS': { oneWayTicketMKD: 550 },
  'KUM-TET': { oneWayTicketMKD: 440 },
  'KUM-SKP': { oneWayTicketMKD: 220 },
  'KUM-RES': { oneWayTicketMKD: 830 },
  'KUM-BIT': { oneWayTicketMKD: 800 },
  'KUM-PRI': { oneWayTicketMKD: 660 },
  'KUM-KAV': { oneWayTicketMKD: 550 },
  'KUM-VEL': { oneWayTicketMKD: 310 },
  'KUM-VRA': { oneWayTicketMKD: 440, returnTicketMKD: 940, oneWayTicketRSD: 880, returnTicketRSD: 1760 },
  'KUM-LES': { oneWayTicketMKD: 640, returnTicketMKD: 1100, oneWayTicketRSD: 1270, returnTicketRSD: 2090 },
  'KUM-NIS': { oneWayTicketMKD: 770, returnTicketMKD: 1320, oneWayTicketRSD: 1600, returnTicketRSD: 2530 },
  'KUM-JAG': { oneWayTicketMKD: 1050, returnTicketMKD: 1980, oneWayTicketRSD: 1980, returnTicketRSD: 3800 },
  'KUM-BEG': { oneWayTicketMKD: 1540, returnTicketMKD: 2640, oneWayTicketRSD: 2920, returnTicketRSD: 5170 },

  // --- VRA (Vranje) Departures ---
  'VRA-OHR': { oneWayTicketMKD: 1100, returnTicketMKD: 2100, oneWayTicketRSD: 2200, returnTicketRSD: 4130 },
  'VRA-RES': { oneWayTicketMKD: 1540, returnTicketMKD: 2420, oneWayTicketRSD: 2970, returnTicketRSD: 4620 },
  'VRA-BIT': { oneWayTicketMKD: 1430, returnTicketMKD: 2090, oneWayTicketRSD: 2750, returnTicketRSD: 4120 },
  'VRA-PRI': { oneWayTicketMKD: 1100, returnTicketMKD: 1980, oneWayTicketRSD: 2200, returnTicketRSD: 3850 },
  'VRA-VEL': { oneWayTicketMKD: 880, returnTicketMKD: 1320, oneWayTicketRSD: 1760, returnTicketRSD: 2530 },
  'VRA-KAV': { oneWayTicketMKD: 1050, returnTicketMKD: 1600, oneWayTicketRSD: 1980, returnTicketRSD: 3080 },
  'VRA-KIC': { oneWayTicketMKD: 990, returnTicketMKD: 1700, oneWayTicketRSD: 1930, returnTicketRSD: 3300 },
  'VRA-GOS': { oneWayTicketMKD: 940, returnTicketMKD: 1600, oneWayTicketRSD: 1760, returnTicketRSD: 3080 },
  'VRA-TET': { oneWayTicketMKD: 880, returnTicketMKD: 1490, oneWayTicketRSD: 1760, returnTicketRSD: 2860 },
  'VRA-SKP': { oneWayTicketMKD: 550, returnTicketMKD: 940, oneWayTicketRSD: 990, returnTicketRSD: 1760 },
  'VRA-KUM': { oneWayTicketMKD: 440, returnTicketMKD: 940, oneWayTicketRSD: 880, returnTicketRSD: 1760 },

  // --- LES (Leskovac) Departures ---
  'LES-OHR': { oneWayTicketMKD: 1380, returnTicketMKD: 2640, oneWayTicketRSD: 2700, returnTicketRSD: 4510 },
  'LES-RES': { oneWayTicketMKD: 1650, returnTicketMKD: 2640, oneWayTicketRSD: 3250, returnTicketRSD: 5170 },
  'LES-BIT': { oneWayTicketMKD: 1600, returnTicketMKD: 2370, oneWayTicketRSD: 3080, returnTicketRSD: 4620 },
  'LES-PRI': { oneWayTicketMKD: 1320, returnTicketMKD: 2260, oneWayTicketRSD: 2640, returnTicketRSD: 4400 },
  'LES-VEL': { oneWayTicketMKD: 1050, returnTicketMKD: 1700, oneWayTicketRSD: 2090, returnTicketRSD: 3300 },
  'LES-KAV': { oneWayTicketMKD: 1210, returnTicketMKD: 1980, oneWayTicketRSD: 2420, returnTicketRSD: 3800 },
  'LES-KIC': { oneWayTicketMKD: 1210, returnTicketMKD: 2090, oneWayTicketRSD: 2310, returnTicketRSD: 4130 },
  'LES-GOS': { oneWayTicketMKD: 990, returnTicketMKD: 1870, oneWayTicketRSD: 1930, returnTicketRSD: 3630 },
  'LES-TET': { oneWayTicketMKD: 940, returnTicketMKD: 1700, oneWayTicketRSD: 1930, returnTicketRSD: 3360 },
  'LES-SKP': { oneWayTicketMKD: 720, returnTicketMKD: 1210, oneWayTicketRSD: 1430, returnTicketRSD: 2370 },
  'LES-KUM': { oneWayTicketMKD: 640, returnTicketMKD: 1100, oneWayTicketRSD: 1270, returnTicketRSD: 2090 },

  // --- NIS (Niš) Departures ---
  'NIS-OHR': { oneWayTicketMKD: 1580, returnTicketMKD: 2920, oneWayTicketRSD: 3080, returnTicketRSD: 5280 },
  'NIS-RES': { oneWayTicketMKD: 1930, returnTicketMKD: 3170, oneWayTicketRSD: 3740, returnTicketRSD: 6330 },
  'NIS-BIT': { oneWayTicketMKD: 1820, returnTicketMKD: 3030, oneWayTicketRSD: 3580, returnTicketRSD: 5830 },
  'NIS-PRI': { oneWayTicketMKD: 1540, returnTicketMKD: 2920, oneWayTicketRSD: 2970, returnTicketRSD: 5720 },
  'NIS-VEL': { oneWayTicketMKD: 1100, returnTicketMKD: 2090, oneWayTicketRSD: 2200, returnTicketRSD: 4130 },
  'NIS-KAV': { oneWayTicketMKD: 1380, returnTicketMKD: 2370, oneWayTicketRSD: 2640, returnTicketRSD: 4620 },
  'NIS-KIC': { oneWayTicketMKD: 1380, returnTicketMKD: 2530, oneWayTicketRSD: 2700, returnTicketRSD: 4900 },
  'NIS-GOS': { oneWayTicketMKD: 1100, returnTicketMKD: 1980, oneWayTicketRSD: 2090, returnTicketRSD: 3800 },
  'NIS-TET': { oneWayTicketMKD: 990, returnTicketMKD: 1760, oneWayTicketRSD: 1930, returnTicketRSD: 3520 },
  'NIS-SKP': { oneWayTicketMKD: 880, returnTicketMKD: 1430, oneWayTicketRSD: 1650, returnTicketRSD: 2860 },
  'NIS-KUM': { oneWayTicketMKD: 770, returnTicketMKD: 1320, oneWayTicketRSD: 1600, returnTicketRSD: 2530 },

  // --- JAG (Jagodina) Departures ---
  'JAG-OHR': { oneWayTicketMKD: 2090, returnTicketMKD: 3960, oneWayTicketRSD: 3960, returnTicketRSD: 7760 },
  'JAG-RES': { oneWayTicketMKD: 2150, returnTicketMKD: 3850, oneWayTicketRSD: 4130, returnTicketRSD: 7480 },
  'JAG-BIT': { oneWayTicketMKD: 2090, returnTicketMKD: 3580, oneWayTicketRSD: 3960, returnTicketRSD: 6990 },
  'JAG-PRI': { oneWayTicketMKD: 1870, returnTicketMKD: 3410, oneWayTicketRSD: 3630, returnTicketRSD: 6600 },
  'JAG-VEL': { oneWayTicketMKD: 1600, returnTicketMKD: 2530, oneWayTicketRSD: 3080, returnTicketRSD: 4900 },
  'JAG-KAV': { oneWayTicketMKD: 1820, returnTicketMKD: 2920, oneWayTicketRSD: 3520, returnTicketRSD: 5720 },
  'JAG-KIC': { oneWayTicketMKD: 1760, returnTicketMKD: 3300, oneWayTicketRSD: 3300, returnTicketRSD: 6440 },
  'JAG-GOS': { oneWayTicketMKD: 1430, returnTicketMKD: 2640, oneWayTicketRSD: 2640, returnTicketRSD: 5170 },
  'JAG-TET': { oneWayTicketMKD: 1380, returnTicketMKD: 2530, oneWayTicketRSD: 2530, returnTicketRSD: 4900 },
  'JAG-SKP': { oneWayTicketMKD: 1160, returnTicketMKD: 1980, oneWayTicketRSD: 1980, returnTicketRSD: 3800 },
  'JAG-KUM': { oneWayTicketMKD: 1050, returnTicketMKD: 1980, oneWayTicketRSD: 1980, returnTicketRSD: 3800 },

  // --- BEG (Belgrade) Departures ---
  'BEG-OHR': { oneWayTicketMKD: 2370, returnTicketMKD: 4350, oneWayTicketRSD: 4620, returnTicketRSD: 7920 },
  'BEG-RES': { oneWayTicketMKD: 2530, returnTicketMKD: 4350, oneWayTicketRSD: 4950, returnTicketRSD: 7760 },
  'BEG-BIT': { oneWayTicketMKD: 2370, returnTicketMKD: 4090, oneWayTicketRSD: 4620, returnTicketRSD: 7540 },
  'BEG-PRI': { oneWayTicketMKD: 2260, returnTicketMKD: 3960, oneWayTicketRSD: 4400, returnTicketRSD: 7320 },
  'BEG-VEL': { oneWayTicketMKD: 1930, returnTicketMKD: 3300, oneWayTicketRSD: 3630, returnTicketRSD: 6440 },
  'BEG-KAV': { oneWayTicketMKD: 2150, returnTicketMKD: 3580, oneWayTicketRSD: 4130, returnTicketRSD: 6990 },
  'BEG-KIC': { oneWayTicketMKD: 2150, returnTicketMKD: 3960, oneWayTicketRSD: 4130, returnTicketRSD: 7760 },
  'BEG-GOS': { oneWayTicketMKD: 1930, returnTicketMKD: 3300, oneWayTicketRSD: 3800, returnTicketRSD: 6440 },
  'BEG-TET': { oneWayTicketMKD: 1820, returnTicketMKD: 3190, oneWayTicketRSD: 3580, returnTicketRSD: 6330 },
  'BEG-SKP': { oneWayTicketMKD: 1760, returnTicketMKD: 3030, oneWayTicketRSD: 3410, returnTicketRSD: 6830 },
  'BEG-KUM': { oneWayTicketMKD: 1540, returnTicketMKD: 2640, oneWayTicketRSD: 2920, returnTicketRSD: 5170 },
};
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
      'OHR-KIC', 'OHR-GOS', 'OHR-TET', 'OHR-SKP', 'OHR-KUM', 'OHR-VRA', 'OHR-LES', 'OHR-NIS', 'OHR-JAG', 'OHR-BEG',
      'KIC-GOS', 'KIC-TET', 'KIC-SKP', 'KIC-KUM', 'KIC-VRA', 'KIC-LES', 'KIC-NIS', 'KIC-JAG', 'KIC-BEG',
      'GOS-TET', 'GOS-SKP', 'GOS-KUM', 'GOS-VRA', 'GOS-LES', 'GOS-NIS', 'GOS-JAG', 'GOS-BEG',
      'TET-SKP', 'TET-KUM', 'TET-VRA', 'TET-LES', 'TET-NIS', 'TET-JAG', 'TET-BEG',
      'SKP-KUM', 'SKP-VRA', 'SKP-LES', 'SKP-NIS', 'SKP-JAG', 'SKP-BEG',
      'KUM-VRA', 'KUM-LES', 'KUM-NIS', 'KUM-JAG', 'KUM-BEG',
    ]),
    stops: [
      { cityId: 'OHR', arrivalOffsetMin: 0,   departureOffsetMin: 0 },
      { cityId: 'KIC', arrivalOffsetMin: 60,  departureOffsetMin: 60 },
      { cityId: 'GOS', arrivalOffsetMin: 105, departureOffsetMin: 105 },
      { cityId: 'TET', arrivalOffsetMin: 165, departureOffsetMin: 165 },
      { cityId: 'SKP', arrivalOffsetMin: 225, departureOffsetMin: 225 },
      { cityId: 'KUM', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'VRA', arrivalOffsetMin: 335, departureOffsetMin: 335 },
      { cityId: 'LES', arrivalOffsetMin: 375, departureOffsetMin: 375 },
      { cityId: 'NIS', arrivalOffsetMin: 435, departureOffsetMin: 435 },
      { cityId: 'JAG', arrivalOffsetMin: 545, departureOffsetMin: 545 },
      { cityId: 'BEG', arrivalOffsetMin: 645, departureOffsetMin: 645 },
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
      'KUM-SKP', 'KUM-TET', 'KUM-GOS', 'KUM-KIC', 'KUM-OHR',
      'SKP-TET', 'SKP-GOS', 'SKP-KIC', 'SKP-OHR',
      'TET-GOS', 'TET-KIC', 'TET-OHR',
      'GOS-KIC', 'GOS-OHR',
      'KIC-OHR'
    ]),
    stops: [
      { cityId: 'BEG', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'JAG', arrivalOffsetMin: 100, departureOffsetMin: 100 },
      { cityId: 'NIS', arrivalOffsetMin: 210, departureOffsetMin: 210 },
      { cityId: 'LES', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'VRA', arrivalOffsetMin: 330, departureOffsetMin: 330 },
      { cityId: 'KUM', arrivalOffsetMin: 450, departureOffsetMin: 450 },
      { cityId: 'SKP', arrivalOffsetMin: 510, departureOffsetMin: 510 },
      { cityId: 'TET', arrivalOffsetMin: 550, departureOffsetMin: 550 },
      { cityId: 'GOS', arrivalOffsetMin: 590, departureOffsetMin: 590 },
      { cityId: 'KIC', arrivalOffsetMin: 630, departureOffsetMin: 630 },
      { cityId: 'OHR', arrivalOffsetMin: 690, departureOffsetMin: 690 },
    ],
  },
  {
    id: 'R5',
    name: 'OHR – BEG',
    prices: getPartialRoutes([
      'OHR-RES', 'OHR-BIT', 'OHR-PRI', 'OHR-KAV', 'OHR-VEL', 'OHR-SKP',
      'RES-BIT', 'RES-PRI', 'RES-KAV', 'RES-VEL', 'RES-SKP', 'RES-KUM', 'RES-VRA', 'RES-LES', 'RES-NIS', 'RES-JAG', 'RES-BEG',
      'BIT-PRI', 'BIT-KAV', 'BIT-VEL', 'BIT-SKP', 'BIT-KUM', 'BIT-VRA', 'BIT-LES', 'BIT-NIS', 'BIT-JAG', 'BIT-BEG',
      'PRI-KAV', 'PRI-VEL', 'PRI-SKP', 'PRI-KUM', 'PRI-VRA', 'PRI-LES', 'PRI-NIS', 'PRI-JAG', 'PRI-BEG',
      'KAV-VEL', 'KAV-SKP', 'KAV-KUM', 'KAV-VRA', 'KAV-LES', 'KAV-NIS', 'KAV-JAG', 'KAV-BEG',
      'VEL-SKP', 'VEL-KUM', 'VEL-VRA', 'VEL-LES', 'VEL-NIS', 'VEL-JAG', 'VEL-BEG',
      'SKP-KUM', 'SKP-VRA', 'SKP-LES', 'SKP-NIS', 'SKP-JAG', 'SKP-BEG',
      'KUM-VRA', 'KUM-LES', 'KUM-NIS', 'KUM-JAG', 'KUM-BEG',
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
      { cityId: 'VRA', arrivalOffsetMin: 470, departureOffsetMin: 470 },
      { cityId: 'LES', arrivalOffsetMin: 510, departureOffsetMin: 510 },
      { cityId: 'NIS', arrivalOffsetMin: 570, departureOffsetMin: 570 },
      { cityId: 'JAG', arrivalOffsetMin: 680, departureOffsetMin: 680 },
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
      'KUM-SKP', 'KUM-KAV', 'KUM-VEL', 'KUM-PRI', 'KUM-BIT', 'KUM-RES', 'KUM-OHR',
      'SKP-KAV', 'SKP-VEL', 'SKP-PRI', 'SKP-BIT', 'SKP-RES', 'SKP-OHR',
      'KAV-VEL', 'KAV-PRI', 'KAV-BIT', 'KAV-RES', 'KAV-OHR',
      'VEL-PRI', 'VEL-BIT', 'VEL-RES', 'VEL-OHR',
      'PRI-BIT', 'PRI-RES', 'PRI-OHR',
      'BIT-RES', 'BIT-OHR',
      'RES-OHR'
    ]),
    stops: [
      { cityId: 'BEG', arrivalOffsetMin: 0, departureOffsetMin: 0 },
      { cityId: 'JAG', arrivalOffsetMin: 100, departureOffsetMin: 100 },
      { cityId: 'NIS', arrivalOffsetMin: 210, departureOffsetMin: 210 },
      { cityId: 'LES', arrivalOffsetMin: 270, departureOffsetMin: 270 },
      { cityId: 'VRA', arrivalOffsetMin: 330, departureOffsetMin: 330 },
      { cityId: 'KUM', arrivalOffsetMin: 450, departureOffsetMin: 450 },
      { cityId: 'SKP', arrivalOffsetMin: 510, departureOffsetMin: 510 },
      { cityId: 'KAV', arrivalOffsetMin: 540, departureOffsetMin: 540 },
      { cityId: 'VEL', arrivalOffsetMin: 575, departureOffsetMin: 575 },
      { cityId: 'PRI', arrivalOffsetMin: 640, departureOffsetMin: 600 },
      { cityId: 'BIT', arrivalOffsetMin: 685, departureOffsetMin: 720 },
      { cityId: 'RES', arrivalOffsetMin: 725, departureOffsetMin: 765 },
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
      { cityId: 'PRI', arrivalOffsetMin: 120, departureOffsetMin: 120 },
      { cityId: 'BIT', arrivalOffsetMin: 180, departureOffsetMin: 180 },
      { cityId: 'RES', arrivalOffsetMin: 220, departureOffsetMin: 220 },
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
