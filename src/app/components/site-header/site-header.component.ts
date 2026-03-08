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
  locale = inject(LOCALE_ID);

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
}
