import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

/** Same key as the inline script in index.html, which applies the theme before the page paints */
const STORAGE_KEY = 'galeb.theme';

/**
 * Light / dark colour theme. Follows the device setting until the visitor picks a theme
 * with the toggle; that choice is remembered in this browser.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  readonly isDark = signal(this.document.documentElement.classList.contains('dark'));

  constructor() {
    this.systemDark.addEventListener('change', event => {
      if (!this.savedTheme()) {
        this.apply(event.matches);
      }
    });
  }

  toggle(): void {
    const dark = !this.isDark();
    this.apply(dark);
    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable (private mode) - the theme still switches for this visit
    }
  }

  private apply(dark: boolean): void {
    this.isDark.set(dark);
    this.document.documentElement.classList.toggle('dark', dark);
  }

  private savedTheme(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
