import { CityId } from '../components/trip-selector/trip-selector.models';

export interface LastSearch {
  from: CityId;
  to: CityId;
}

/** Remembers the visitor's last timetable search per mode ('intercity' | 'local'), in this browser only */
const storageKey = (mode: string) => `galeb.lastSearch.${mode}`;

export const loadLastSearch = (mode: string): LastSearch | null => {
  try {
    const raw = localStorage.getItem(storageKey(mode));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return typeof parsed?.from === 'string' && typeof parsed?.to === 'string' ? parsed : null;
  } catch {
    return null;
  }
};

export const saveLastSearch = (mode: string, search: LastSearch): void => {
  try {
    localStorage.setItem(storageKey(mode), JSON.stringify(search));
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) - the search just isn't remembered
  }
};
