import { NgClass, NgOptimizedImage } from '@angular/common';
import {Component, inject, LOCALE_ID} from '@angular/core';
import { RouterLink } from '@angular/router';

type Locale = 'mk' | 'en';

const splitPath = (pathname: string) =>
  pathname.split('/').filter(Boolean);

const detectLocale = (parts: string[]): Locale =>
  (parts[0] === 'en' || parts[0] === 'mk') ? (parts[0] as Locale) : 'mk';

@Component({
  selector: 'app-site-header',
  imports: [NgClass, NgOptimizedImage, RouterLink],
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  isMobileMenuOpen = false;

  get currentLocale(): Locale {
    return detectLocale(splitPath(location.pathname));
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  switchLocale(next: 'mk' | 'en'): void {
    const { pathname, search, hash, origin } = location;
    const parts = pathname.split('/').filter(Boolean);

    // Replace or prepend locale folder
    if (parts[0] === 'mk' || parts[0] === 'en') {
      parts[0] = next;
    } else {
      parts.unshift(next);
    }

    const rest = parts.slice(1).join('/'); // everything after locale
    const target =
      rest.length === 0
        ? `/${next}/`                 // IMPORTANT: trailing slash at locale root
        : `/${next}/${rest}`;

    location.href = `${origin}${target}${search ?? ''}${hash ?? ''}`;
  }

  bookTicket(): void {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const tomorrowDate = `${yyyy}-${mm}-${dd}`;

    const language = this.currentLocale === 'mk' ? 'mk' : 'en';

    const targetUrl = `https://www.obilet.com/${language}/journeys/6776-1818/${tomorrowDate}?partner=19713`;
    window.open(targetUrl, '_blank');
  }
}
