// Loaded before every unit test: fills in what the app expects from a real browser
import '@angular/localize/init';

// jsdom has no matchMedia (ThemeService reads the system colour scheme)
window.matchMedia ??= (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
});

// Node 25's own localStorage (unusable without --localstorage-file) hides jsdom's, so use an in-memory one
class MemoryStorage implements Storage {
  private items = new Map<string, string>();
  get length() { return this.items.size; }
  clear() { this.items.clear(); }
  getItem(key: string) { return this.items.get(key) ?? null; }
  key(index: number) { return [...this.items.keys()][index] ?? null; }
  removeItem(key: string) { this.items.delete(key); }
  setItem(key: string, value: string) { this.items.set(key, String(value)); }
}
Object.defineProperty(globalThis, 'localStorage', {value: new MemoryStorage(), configurable: true});

export default [];
