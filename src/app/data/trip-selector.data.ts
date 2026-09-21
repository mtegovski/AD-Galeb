import {City, Route, Run, TicketPrice} from '../components/trip-selector/trip-selector.models';
import {Locale} from '../utils/languages.util';

export const CITY_TRANSLATIONS: Record<string, Record<Locale, string>> = {
  OHR: {mk: 'Охрид', en: 'Ohrid', sr: 'Охрид'},
  RES: {mk: 'Ресен', en: 'Resen', sr: 'Ресен'},
  BIT: {mk: 'Битола', en: 'Bitola', sr: 'Битоља'},
  PRI: {mk: 'Прилеп', en: 'Prilep', sr: 'Прилеп'},
  VEL: {mk: 'Велес', en: 'Veles', sr: 'Велес'},
  STI: {mk: 'Штип', en: 'Štip', sr: 'Штип'},
  KOC: {mk: 'Кочани', en: 'Kochani', sr: 'Кочани'},
  KAV: {mk: 'Кавадарци', en: 'Kavadarci', sr: 'Кавадарци'},
  KIC: {mk: 'Кичево', en: 'Kichevo', sr: 'Кичево'},
  GOS: {mk: 'Гостивар', en: 'Gostivar', sr: 'Гостивар'},
  TET: {mk: 'Тетово', en: 'Tetovo', sr: 'Тетово'},
  SKP: {mk: 'Скопје', en: 'Skopje', sr: 'Скопље'},
  SKPBIT: {mk: 'Скопје', en: 'Skopje', sr: 'Скопље'},
  KUM: {mk: 'Куманово', en: 'Kumanovo', sr: 'Куманово'},

  // Serbia
  VRA: {mk: 'Врање', en: 'Vranje', sr: 'Врање'},
  LES: {mk: 'Лесковац', en: 'Leskovac', sr: 'Лесковац'},
  NIS: {mk: 'Ниш', en: 'Niš', sr: 'Ниш'},
  JAG: {mk: 'Јагодина', en: 'Jagodina', sr: 'Јагодина'},
  BEG: {mk: 'Белград', en: 'Belgrade', sr: 'Београд'},

  // Local cities/stops (Ohrid area)
  KOS: {mk: 'Косел', en: 'Kosel', sr: 'Косел'},
  LIV: {mk: 'Ливоишта', en: 'Livoishta', sr: 'Ливоишта'},
  PES: {mk: 'Пештани', en: 'Peshtani', sr: 'Пештани'},
  VELG: {mk: 'Велгошти', en: 'Velgoshti', sr: 'Велгошти'},
  OTP: {mk: 'Отпад', en: 'Otpad', sr: 'Отпад'},
  LESK: {mk: 'Лескоец', en: 'Leskoec', sr: 'Лескоец'},
  VAP: {mk: 'Вапила', en: 'Vapila', sr: 'Вапила'},
  BIZ: {mk: 'Билјанини Извори', en: 'Biljanini Izvori', sr: 'Биљанини Извори'},
  RAC: {mk: 'Рача', en: 'Racha', sr: 'Рача'},
  STF: {mk: 'Свети Стефан', en: 'Sveti Stefan', sr: 'Свети Стефан'},
  GRA: {mk: 'Гранит', en: 'Granit', sr: 'Гранит'},
  MET: {mk: 'Метропол', en: 'Metropol', sr: 'Метропол'},
  LAG: {mk: 'Лагадин', en: 'Lagadin', sr: 'Лагадин'},
  ELE: {mk: 'Елешец', en: 'Eleshec', sr: 'Елешец'},
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
  {id: 'OHR', name: 'Ohrid'},
  {id: 'RES', name: 'Resen'},
  {id: 'BIT', name: 'Bitola'},
  {id: 'PRI', name: 'Prilep'},
  {id: 'VEL', name: 'Veles'},
  {id: 'STI', name: 'Štip'},
  {id: 'KOC', name: 'Kochani'},
  {id: 'KAV', name: 'Kavadarci'},
  {id: 'KIC', name: 'Kichevo'},
  {id: 'GOS', name: 'Gostivar'},
  {id: 'TET', name: 'Tetovo'},
  {id: 'SKP', name: 'Skopje'},
  {id: 'KUM', name: 'Kumanovo'},

  // Srbija
  {id: 'VRA', name: 'Vranje'},
  {id: 'LES', name: 'Leskovac'},
  {id: 'NIS', name: 'Niš'},
  {id: 'JAG', name: 'Jagodina'},
  {id: 'BEG', name: 'Belgrade'},
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
  'OHR-RES': {oneWayTicketMKD: 310, returnTicketMKD: 500, studentTicketMKD: 310},
  'OHR-BIT': {oneWayTicketMKD: 420, returnTicketMKD: 670, studentTicketMKD: 420},
  'OHR-PRI': {oneWayTicketMKD: 630, returnTicketMKD: 1000, studentTicketMKD: 630},
  'OHR-VEL': {oneWayTicketMKD: 950, returnTicketMKD: 1450, studentTicketMKD: 950},
  'OHR-STI': {oneWayTicketMKD: 1000, returnTicketMKD: 1600, studentTicketMKD: 1000},
  'OHR-KOC': {oneWayTicketMKD: 1100, returnTicketMKD: 1720, studentTicketMKD: 1100},
  'OHR-KIC': {oneWayTicketMKD: 420, returnTicketMKD: 550},
  'OHR-GOS': {oneWayTicketMKD: 500, returnTicketMKD: 790},
  'OHR-TET': {oneWayTicketMKD: 610, returnTicketMKD: 880},
  'OHR-SKP': {oneWayTicketMKD: 950, returnTicketMKD: 1350, studentTicketMKD: 950},
  'OHR-SKPBIT': {oneWayTicketMKD: 1050, studentTicketMKD: 1050},
  'OHR-KUM': {oneWayTicketMKD: 1100},
  'OHR-KAV': {oneWayTicketMKD: 820, returnTicketMKD: 1300, studentTicketMKD: 820},
  'OHR-VRA': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'OHR-LES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'OHR-NIS': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'OHR-JAG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'OHR-BEG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},

  // --- RES Departures ---
  'RES-OHR': {oneWayTicketMKD: 310, returnTicketMKD: 500, studentTicketMKD: 310},
  'RES-BIT': {oneWayTicketMKD: 220, returnTicketMKD: 400, studentTicketMKD: 220},
  'RES-PRI': {oneWayTicketMKD: 450, returnTicketMKD: 700, studentTicketMKD: 450},
  'RES-VEL': {oneWayTicketMKD: 750, returnTicketMKD: 1200, studentTicketMKD: 750},
  'RES-STI': {oneWayTicketMKD: 850, returnTicketMKD: 1450, studentTicketMKD: 850},
  'RES-KAV': {oneWayTicketMKD: 680, returnTicketMKD: 1000, studentTicketMKD: 680},
  'RES-KOC': {oneWayTicketMKD: 1000, returnTicketMKD: 1600, studentTicketMKD: 1000},
  'RES-SKP': {oneWayTicketMKD: 850, returnTicketMKD: 1210, studentTicketMKD: 850},
  'RES-KUM': {oneWayTicketMKD: 1000},
  'RES-VRA': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'RES-LES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'RES-NIS': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'RES-JAG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'RES-BEG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},

  // --- BIT Departures ---
  'BIT-OHR': {oneWayTicketMKD: 420, returnTicketMKD: 670, studentTicketMKD: 420},
  'BIT-RES': {oneWayTicketMKD: 220, returnTicketMKD: 400, studentTicketMKD: 220},
  'BIT-PRI': {oneWayTicketMKD: 220, returnTicketMKD: 400, studentTicketMKD: 220},
  'BIT-VEL': {oneWayTicketMKD: 600, returnTicketMKD: 1000, studentTicketMKD: 600},
  'BIT-KAV': {oneWayTicketMKD: 550, returnTicketMKD: 840, studentTicketMKD: 550},
  'BIT-STI': {oneWayTicketMKD: 750, returnTicketMKD: 1250, studentTicketMKD: 750},
  'BIT-KOC': {oneWayTicketMKD: 850, returnTicketMKD: 1350, studentTicketMKD: 850},
  'BIT-SKP': {oneWayTicketMKD: 750, returnTicketMKD: 1150, studentTicketMKD: 750},
  'BIT-KUM': {oneWayTicketMKD: 900},
  'BIT-VRA': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'BIT-LES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'BIT-NIS': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'BIT-JAG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'BIT-BEG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},

  // --- PRI Departures ---
  'PRI-BIT': {oneWayTicketMKD: 220, returnTicketMKD: 400, studentTicketMKD: 220},
  'PRI-RES': {oneWayTicketMKD: 450, returnTicketMKD: 700, studentTicketMKD: 450},
  'PRI-OHR': {oneWayTicketMKD: 630, returnTicketMKD: 1000, studentTicketMKD: 630},
  'PRI-KAV': {oneWayTicketMKD: 350, returnTicketMKD: 500, studentTicketMKD: 350},
  'PRI-VEL': {oneWayTicketMKD: 450, returnTicketMKD: 720, studentTicketMKD: 450},
  'PRI-STI': {oneWayTicketMKD: 620, returnTicketMKD: 1100, studentTicketMKD: 620},
  'PRI-KOC': {oneWayTicketMKD: 740, returnTicketMKD: 1200, studentTicketMKD: 740},
  'PRI-SKP': {oneWayTicketMKD: 550, returnTicketMKD: 1000, studentTicketMKD: 550},
  'PRI-KUM': {oneWayTicketMKD: 700},
  'PRI-VRA': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'PRI-LES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'PRI-NIS': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'PRI-JAG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'PRI-BEG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},

  // --- VEL Departures ---
  'VEL-PRI': {oneWayTicketMKD: 450, returnTicketMKD: 720, studentTicketMKD: 450},
  'VEL-STI': {oneWayTicketMKD: 250, returnTicketMKD: 470, studentTicketMKD: 250},
  'VEL-KOC': {oneWayTicketMKD: 400, returnTicketMKD: 570, studentTicketMKD: 400},
  'VEL-SKP': {oneWayTicketMKD: 250, studentTicketMKD: 250},
  'VEL-KAV': {oneWayTicketMKD: 350, returnTicketMKD: 400},
  'VEL-BIT': {oneWayTicketMKD: 600, returnTicketMKD: 1000},
  'VEL-OHR': {oneWayTicketMKD: 950, returnTicketMKD: 1450, studentTicketMKD: 950},
  'VEL-RES': {oneWayTicketMKD: 750, returnTicketMKD: 1200},
  'VEL-KUM': {oneWayTicketMKD: 400},
  'VEL-VRA': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VEL-LES': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VEL-NIS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VEL-JAG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'VEL-BEG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},

  // --- STI Departures ---
  'STI-VEL': {oneWayTicketMKD: 250, returnTicketMKD: 470, studentTicketMKD: 250},
  'STI-KOC': {oneWayTicketMKD: 200, returnTicketMKD: 350, studentTicketMKD: 200},
  'STI-PRI': {oneWayTicketMKD: 620, returnTicketMKD: 1100, studentTicketMKD: 620},
  'STI-BIT': {oneWayTicketMKD: 750, returnTicketMKD: 1250, studentTicketMKD: 750},
  'STI-OHR': {oneWayTicketMKD: 1000, returnTicketMKD: 1600, studentTicketMKD: 1000},
  'STI-RES': {oneWayTicketMKD: 850, returnTicketMKD: 1450, studentTicketMKD: 850},

  // --- KOC Departures ---
  'KOC-STI': {oneWayTicketMKD: 200, returnTicketMKD: 350, studentTicketMKD: 200},
  'KOC-VEL': {oneWayTicketMKD: 400, returnTicketMKD: 570, studentTicketMKD: 400},
  'KOC-BIT': {oneWayTicketMKD: 850, returnTicketMKD: 1350, studentTicketMKD: 850},
  'KOC-OHR': {oneWayTicketMKD: 1100, returnTicketMKD: 1720, studentTicketMKD: 1100},
  'KOC-RES': {oneWayTicketMKD: 1000, returnTicketMKD: 1600, studentTicketMKD: 1000},
  'KOC-PRI': {oneWayTicketMKD: 740, returnTicketMKD: 1200, studentTicketMKD: 740},

  // --- KAV Departures ---
  'KAV-OHR': {oneWayTicketMKD: 820, returnTicketMKD: 1300, studentTicketMKD: 820},
  'KAV-RES': {oneWayTicketMKD: 680, returnTicketMKD: 1000},
  'KAV-BIT': {oneWayTicketMKD: 550, returnTicketMKD: 840},
  'KAV-PRI': {oneWayTicketMKD: 350, returnTicketMKD: 500},
  'KAV-VEL': {oneWayTicketMKD: 350, returnTicketMKD: 550, studentTicketMKD: 350},
  'KAV-SKP': {oneWayTicketMKD: 500, returnTicketMKD: 750},
  'KAV-KUM': {oneWayTicketMKD: 650},
  'KAV-VRA': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'KAV-LES': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'KAV-NIS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'KAV-JAG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'KAV-BEG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},

  // --- KIC Departures ---
  'KIC-OHR': {oneWayTicketMKD: 420, returnTicketMKD: 550},
  'KIC-SKP': {oneWayTicketMKD: 500, returnTicketMKD: 720},
  'KIC-GOS': {oneWayTicketMKD: 220, returnTicketMKD: 330},
  'KIC-TET': {oneWayTicketMKD: 260, returnTicketMKD: 400},
  'KIC-KUM': {oneWayTicketMKD: 720},
  'KIC-VRA': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'KIC-LES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'KIC-NIS': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'KIC-JAG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'KIC-BEG': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},

  // --- GOS Departures ---
  'GOS-OHR': {oneWayTicketMKD: 500, returnTicketMKD: 790},
  'GOS-KIC': {oneWayTicketMKD: 220, returnTicketMKD: 330},
  'GOS-TET': {oneWayTicketMKD: 150},
  'GOS-SKP': {oneWayTicketMKD: 330},
  'GOS-KUM': {oneWayTicketMKD: 550},
  'GOS-VRA': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'GOS-LES': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'GOS-NIS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'GOS-JAG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'GOS-BEG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},

  // --- TET Departures ---
  'TET-OHR': {oneWayTicketMKD: 610, returnTicketMKD: 880},
  'TET-KIC': {oneWayTicketMKD: 260, returnTicketMKD: 400},
  'TET-GOS': {oneWayTicketMKD: 150},
  'TET-SKP': {oneWayTicketMKD: 220},
  'TET-KUM': {oneWayTicketMKD: 440},
  'TET-VRA': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'TET-LES': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'TET-NIS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'TET-JAG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'TET-BEG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},

  // --- SKP Departures ---
  'SKPBIT-OHR': {oneWayTicketMKD: 1050, studentTicketMKD: 1050},
  'SKP-OHR': {oneWayTicketMKD: 950, returnTicketMKD: 1350, studentTicketMKD: 950},
  'SKP-KIC': {oneWayTicketMKD: 500, returnTicketMKD: 720},
  'SKP-GOS': {oneWayTicketMKD: 330},
  'SKP-TET': {oneWayTicketMKD: 220},
  'SKP-KUM': {oneWayTicketMKD: 200},
  'SKP-VRA': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'SKP-LES': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'SKP-NIS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'SKP-JAG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'SKP-BEG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'SKP-RES': {oneWayTicketMKD: 850, returnTicketMKD: 1210},
  'SKP-BIT': {oneWayTicketMKD: 750, returnTicketMKD: 1150},
  'SKP-PRI': {oneWayTicketMKD: 550, returnTicketMKD: 1000},
  'SKP-KAV': {oneWayTicketMKD: 500, returnTicketMKD: 750},
  'SKP-VEL': {oneWayTicketMKD: 250},

  // --- KUM Departures ---
  'KUM-OHR': {oneWayTicketMKD: 1100},
  'KUM-KIC': {oneWayTicketMKD: 720},
  'KUM-GOS': {oneWayTicketMKD: 550},
  'KUM-TET': {oneWayTicketMKD: 440},
  'KUM-SKP': {oneWayTicketMKD: 200},
  'KUM-RES': {oneWayTicketMKD: 1000},
  'KUM-BIT': {oneWayTicketMKD: 900},
  'KUM-PRI': {oneWayTicketMKD: 700},
  'KUM-KAV': {oneWayTicketMKD: 650},
  'KUM-VEL': {oneWayTicketMKD: 400},
  'KUM-VRA': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'KUM-LES': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'KUM-NIS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'KUM-JAG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'KUM-BEG': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},

  // --- VRA (Vranje) Departures ---
  'VRA-OHR': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'VRA-RES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'VRA-BIT': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'VRA-PRI': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'VRA-VEL': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VRA-KAV': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VRA-KIC': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'VRA-GOS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VRA-TET': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VRA-SKP': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'VRA-KUM': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},

  // --- LES (Leskovac) Departures ---
  'LES-OHR': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'LES-RES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'LES-BIT': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'LES-PRI': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'LES-VEL': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'LES-KAV': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'LES-KIC': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'LES-GOS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'LES-TET': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'LES-SKP': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'LES-KUM': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},

  // --- NIS (Niš) Departures ---
  'NIS-OHR': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'NIS-RES': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'NIS-BIT': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'NIS-PRI': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'NIS-VEL': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'NIS-KAV': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'NIS-KIC': {oneWayTicketMKD: 1800, returnTicketMKD: 3200, oneWayTicketRSD: 3600, returnTicketRSD: 6200},
  'NIS-GOS': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'NIS-TET': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'NIS-SKP': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},
  'NIS-KUM': {oneWayTicketMKD: 1150, returnTicketMKD: 1800, oneWayTicketRSD: 2300, returnTicketRSD: 3500},

  // --- JAG (Jagodina) Departures ---
  'JAG-OHR': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'JAG-RES': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'JAG-BIT': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'JAG-PRI': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'JAG-VEL': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'JAG-KAV': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'JAG-KIC': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'JAG-GOS': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'JAG-TET': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'JAG-SKP': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'JAG-KUM': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},

  // --- BEG (Belgrade) Departures ---
  'BEG-OHR': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'BEG-RES': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'BEG-BIT': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'BEG-PRI': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'BEG-VEL': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'BEG-KAV': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'BEG-KIC': {oneWayTicketMKD: 2700, returnTicketMKD: 4700, oneWayTicketRSD: 5200, returnTicketRSD: 9200},
  'BEG-GOS': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'BEG-TET': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'BEG-SKP': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
  'BEG-KUM': {oneWayTicketMKD: 2100, returnTicketMKD: 3500, oneWayTicketRSD: 4200, returnTicketRSD: 7000},
};
export const ROUTES: Route[] = [
  {
    id: 'R1',
    name: 'OHR – SKP',
    prices: getPartialRoutes(['OHR-SKP', 'OHR-KIC', 'KIC-SKP']),
    stops: [
      {
        cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0,
        boardingLocations: [
          {
            lat: 41.998822, lng: 21.421523,
            label: {mk: 'Архиепископски соборен храм „Свети Климент Охридски“', en: 'Archbishop Cathedral „St. Clement of Ohrid”', sr: 'Архиепископска катедрала „Свети Климент Охридски“'}
          },
          {
            lat: 42.0067345, lng: 21.3599176,
            label: {mk: 'Ѓорче Петров', en: 'Gjorche Petrov', sr: 'Ђорче Петров'}
          },
        ]
      },
      {cityId: 'KIC', arrivalOffsetMin: 60, departureOffsetMin: 60},
      {cityId: 'SKP', arrivalOffsetMin: 180, departureOffsetMin: 180},
    ],
  },
  {
    id: 'R2',
    name: 'SKP – OHR',
    prices: getPartialRoutes(['SKP-OHR', 'SKP-KIC', 'KIC-OHR']),
    stops: [
      {
        cityId: 'SKP', arrivalOffsetMin: 0, departureOffsetMin: 0,
        boardingLocations: [
          {
            lat: 41.998925, lng: 21.422394,
            label: {mk: 'Архиепископски соборен храм „Свети Климент Охридски“', en: 'Archbishop Cathedral „St. Clement of Ohrid”', sr: 'Архиепископска катедрала „Свети Климент Охридски“'}
          },
          {
            lat: 42.006841, lng: 21.360654,
            label: {mk: 'Ѓорче Петров', en: 'Gjorche Petrov', sr: 'Ђорче Петров'}
          },
        ]
      },
      {cityId: 'KIC', arrivalOffsetMin: 120, departureOffsetMin: 120},
      {cityId: 'OHR', arrivalOffsetMin: 180, departureOffsetMin: 180},
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
      {cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'KIC', arrivalOffsetMin: 60, departureOffsetMin: 60},
      {cityId: 'GOS', arrivalOffsetMin: 105, departureOffsetMin: 105},
      {cityId: 'TET', arrivalOffsetMin: 165, departureOffsetMin: 165},
      {cityId: 'SKP', arrivalOffsetMin: 225, departureOffsetMin: 225},
      {cityId: 'KUM', arrivalOffsetMin: 270, departureOffsetMin: 270},
      {cityId: 'VRA', arrivalOffsetMin: 335, departureOffsetMin: 335},
      {cityId: 'LES', arrivalOffsetMin: 375, departureOffsetMin: 375},
      {cityId: 'NIS', arrivalOffsetMin: 435, departureOffsetMin: 435},
      {cityId: 'JAG', arrivalOffsetMin: 545, departureOffsetMin: 545},
      {cityId: 'BEG', arrivalOffsetMin: 645, departureOffsetMin: 645},
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
      {cityId: 'BEG', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'JAG', arrivalOffsetMin: 100, departureOffsetMin: 100},
      {cityId: 'NIS', arrivalOffsetMin: 210, departureOffsetMin: 210},
      {cityId: 'LES', arrivalOffsetMin: 270, departureOffsetMin: 270},
      {cityId: 'VRA', arrivalOffsetMin: 330, departureOffsetMin: 330},
      {cityId: 'KUM', arrivalOffsetMin: 450, departureOffsetMin: 450},
      {cityId: 'SKP', arrivalOffsetMin: 510, departureOffsetMin: 510},
      {cityId: 'TET', arrivalOffsetMin: 550, departureOffsetMin: 550},
      {cityId: 'GOS', arrivalOffsetMin: 590, departureOffsetMin: 590},
      {cityId: 'KIC', arrivalOffsetMin: 630, departureOffsetMin: 630},
      {cityId: 'OHR', arrivalOffsetMin: 690, departureOffsetMin: 690},
    ],
  },
  {
    id: 'R5',
    name: 'OHR – BEG',
    prices: getPartialRoutes([
      'OHR-RES', 'OHR-BIT', 'OHR-PRI', 'OHR-KAV', 'OHR-VEL', 'OHR-SKPBIT',
      'RES-BIT', 'RES-PRI', 'RES-KAV', 'RES-VEL', 'RES-SKP', 'RES-KUM', 'RES-VRA', 'RES-LES', 'RES-NIS', 'RES-JAG', 'RES-BEG',
      'BIT-PRI', 'BIT-KAV', 'BIT-VEL', 'BIT-SKP', 'BIT-KUM', 'BIT-VRA', 'BIT-LES', 'BIT-NIS', 'BIT-JAG', 'BIT-BEG',
      'PRI-KAV', 'PRI-VEL', 'PRI-SKP', 'PRI-KUM', 'PRI-VRA', 'PRI-LES', 'PRI-NIS', 'PRI-JAG', 'PRI-BEG',
      'KAV-VEL', 'KAV-SKP', 'KAV-KUM', 'KAV-VRA', 'KAV-LES', 'KAV-NIS', 'KAV-JAG', 'KAV-BEG',
      'VEL-SKP', 'VEL-KUM', 'VEL-VRA', 'VEL-LES', 'VEL-NIS', 'VEL-JAG', 'VEL-BEG',
      'SKP-KUM', 'SKP-VRA', 'SKP-LES', 'SKP-NIS', 'SKP-JAG', 'SKP-BEG',
      'KUM-VRA', 'KUM-LES', 'KUM-NIS', 'KUM-JAG', 'KUM-BEG',
    ]),
    stops: [
      {cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'RES', arrivalOffsetMin: 40, departureOffsetMin: 40},
      {cityId: 'BIT', arrivalOffsetMin: 105, departureOffsetMin: 105},
      {cityId: 'PRI', arrivalOffsetMin: 165, departureOffsetMin: 165},
      {cityId: 'KAV', arrivalOffsetMin: 240, departureOffsetMin: 240},
      {cityId: 'VEL', arrivalOffsetMin: 285, departureOffsetMin: 285},
      {cityId: 'SKP', arrivalOffsetMin: 360, departureOffsetMin: 360},
      {cityId: 'SKPBIT', arrivalOffsetMin: 360, departureOffsetMin: 360},
      {cityId: 'KUM', arrivalOffsetMin: 405, departureOffsetMin: 405},
      {cityId: 'VRA', arrivalOffsetMin: 470, departureOffsetMin: 470},
      {cityId: 'LES', arrivalOffsetMin: 510, departureOffsetMin: 510},
      {cityId: 'NIS', arrivalOffsetMin: 570, departureOffsetMin: 570},
      {cityId: 'JAG', arrivalOffsetMin: 680, departureOffsetMin: 680},
      {cityId: 'BEG', arrivalOffsetMin: 780, departureOffsetMin: 780},
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
      'SKP-KAV', 'SKP-VEL', 'SKP-PRI', 'SKP-BIT', 'SKP-RES', 'SKPBIT-OHR',
      'KAV-VEL', 'KAV-PRI', 'KAV-BIT', 'KAV-RES', 'KAV-OHR',
      'VEL-PRI', 'VEL-BIT', 'VEL-RES', 'VEL-OHR',
      'PRI-BIT', 'PRI-RES', 'PRI-OHR',
      'BIT-RES', 'BIT-OHR',
      'RES-OHR'
    ]),
    stops: [
      {cityId: 'BEG', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'JAG', arrivalOffsetMin: 100, departureOffsetMin: 100},
      {cityId: 'NIS', arrivalOffsetMin: 210, departureOffsetMin: 210},
      {cityId: 'LES', arrivalOffsetMin: 270, departureOffsetMin: 270},
      {cityId: 'VRA', arrivalOffsetMin: 330, departureOffsetMin: 330},
      {cityId: 'KUM', arrivalOffsetMin: 450, departureOffsetMin: 450},
      {cityId: 'SKP', arrivalOffsetMin: 510, departureOffsetMin: 510},
      {cityId: 'SKPBIT', arrivalOffsetMin: 510, departureOffsetMin: 510},
      {cityId: 'KAV', arrivalOffsetMin: 540, departureOffsetMin: 540},
      {cityId: 'VEL', arrivalOffsetMin: 575, departureOffsetMin: 575},
      {cityId: 'PRI', arrivalOffsetMin: 640, departureOffsetMin: 600},
      {cityId: 'BIT', arrivalOffsetMin: 685, departureOffsetMin: 720},
      {cityId: 'RES', arrivalOffsetMin: 725, departureOffsetMin: 765},
      {cityId: 'OHR', arrivalOffsetMin: 760, departureOffsetMin: 760},
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
      {cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'RES', arrivalOffsetMin: 40, departureOffsetMin: 40},
      {cityId: 'BIT', arrivalOffsetMin: 105, departureOffsetMin: 105},
      {cityId: 'PRI', arrivalOffsetMin: 165, departureOffsetMin: 165},
      {cityId: 'VEL', arrivalOffsetMin: 270, departureOffsetMin: 270},
      {cityId: 'STI', arrivalOffsetMin: 315, departureOffsetMin: 315},
      {cityId: 'KOC', arrivalOffsetMin: 345, departureOffsetMin: 345},
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
      {cityId: 'KOC', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'STI', arrivalOffsetMin: 30, departureOffsetMin: 30},
      {cityId: 'VEL', arrivalOffsetMin: 75, departureOffsetMin: 75},
      {cityId: 'PRI', arrivalOffsetMin: 180, departureOffsetMin: 180},
      {cityId: 'BIT', arrivalOffsetMin: 240, departureOffsetMin: 240},
      {cityId: 'RES', arrivalOffsetMin: 280, departureOffsetMin: 280},
      {cityId: 'OHR', arrivalOffsetMin: 320, departureOffsetMin: 320},
    ],
  },
  {
    id: 'R9',
    name: 'OHR – SKP',
    prices: getPartialRoutes([
      'OHR-RES', 'OHR-BIT', 'OHR-PRI', 'OHR-VEL', 'OHR-SKPBIT',
      'RES-BIT', 'RES-PRI', 'RES-VEL', 'RES-SKP',
      'BIT-PRI', 'BIT-VEL', 'BIT-SKP',
      'PRI-VEL', 'PRI-SKP',
      'VEL-SKP'
    ]),
    stops: [
      {cityId: 'OHR', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'RES', arrivalOffsetMin: 40, departureOffsetMin: 40},
      {cityId: 'BIT', arrivalOffsetMin: 105, departureOffsetMin: 105},
      {cityId: 'PRI', arrivalOffsetMin: 165, departureOffsetMin: 165},
      {cityId: 'VEL', arrivalOffsetMin: 270, departureOffsetMin: 270},
      {cityId: 'SKP', arrivalOffsetMin: 330, departureOffsetMin: 330},
      {cityId: 'SKPBIT', arrivalOffsetMin: 330, departureOffsetMin: 330},
    ],
  },
  {
    id: 'R10',
    name: 'SKP – OHR',
    prices: getPartialRoutes([
      'SKP-VEL', 'SKP-PRI', 'SKP-BIT', 'SKP-RES', 'SKPBIT-OHR',
      'VEL-PRI', 'VEL-BIT', 'VEL-RES', 'VEL-OHR',
      'PRI-BIT', 'PRI-RES', 'PRI-OHR',
      'BIT-RES', 'BIT-OHR',
      'RES-OHR'
    ]),
    stops: [
      {cityId: 'SKP', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'SKPBIT', arrivalOffsetMin: 0, departureOffsetMin: 0},
      {cityId: 'VEL', arrivalOffsetMin: 60, departureOffsetMin: 60},
      {cityId: 'PRI', arrivalOffsetMin: 120, departureOffsetMin: 120},
      {cityId: 'BIT', arrivalOffsetMin: 180, departureOffsetMin: 180},
      {cityId: 'RES', arrivalOffsetMin: 220, departureOffsetMin: 220},
      {cityId: 'OHR', arrivalOffsetMin: 305, departureOffsetMin: 305}
    ],
  },
];

export const RUNS: Run[] = [
  {id: 'R1-0530', routeId: 'R1', departureTimeLocal: '05:30'},
  {id: 'R1-1045', routeId: 'R1', departureTimeLocal: '10:45'},
  {id: 'R1-1500', routeId: 'R1', departureTimeLocal: '15:00'},
  {id: 'R1-1900', routeId: 'R1', departureTimeLocal: '19:00'},

  {id: 'R2-0800', routeId: 'R2', departureTimeLocal: '08:00'},
  {id: 'R2-1000', routeId: 'R2', departureTimeLocal: '10:00'},
  {id: 'R2-1630', routeId: 'R2', departureTimeLocal: '16:30'},
  {id: 'R2-1830', routeId: 'R2', departureTimeLocal: '18:30'},

  {id: 'R3-1745', routeId: 'R3', departureTimeLocal: '17:45'},

  {id: 'R4-2130', routeId: 'R4', departureTimeLocal: '21:30'},

  {id: 'R5-1610', routeId: 'R5', departureTimeLocal: '15:30'},

  {id: 'R6-2130', routeId: 'R6', departureTimeLocal: '21:30'},

  {id: 'R7-0600', routeId: 'R7', departureTimeLocal: '06:00'},

  {id: 'R8-1430', routeId: 'R8', departureTimeLocal: '14:30'},

  {id: 'R9-1000', routeId: 'R9', departureTimeLocal: '10:00'},

  {id: 'R10-1630', routeId: 'R10', departureTimeLocal: '16:30'},
];
