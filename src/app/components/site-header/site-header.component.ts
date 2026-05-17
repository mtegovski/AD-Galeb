import { NgClass, NgOptimizedImage } from '@angular/common';
import {Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import {detectLocale, Locale, splitPath} from '../../utils/languages.util';
import {TicketService} from '../../services/ticket.service';

@Component({
  selector: 'app-site-header',
  imports: [NgClass, NgOptimizedImage, RouterLink],
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  ticketService = inject(TicketService);
  isMobileMenuOpen = false;
  isLanguageMenuOpen = false;

  readonly locales: { code: Locale; label: string; name: string; flagSrc: string; ariaLabel: string }[] = [
    { code: 'mk', label: 'MK', name: 'Македонски', flagSrc: 'assets/mk_flag.svg', ariaLabel: 'Switch to Macedonian' },
    { code: 'en', label: 'EN', name: 'English', flagSrc: 'assets/en_flag.svg', ariaLabel: 'Switch to English' },
    { code: 'sr', label: 'SR', name: 'Српски', flagSrc: 'assets/sr_flag.svg', ariaLabel: 'Switch to Serbian' },
  ];

  get currentLocale(): Locale {
    return detectLocale(splitPath(location.pathname));
  }

  get currentLocaleOption(): { code: Locale; label: string; name: string; flagSrc: string; ariaLabel: string } {
    return this.locales.find(locale => locale.code === this.currentLocale) ?? this.locales[0];
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isLanguageMenuOpen = false;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.isLanguageMenuOpen = false;
  }

  switchLocale(next: Locale): void {
    const { pathname, search, hash, origin } = location;
    const parts = pathname.split('/').filter(Boolean);

    // Replace or prepend locale folder
    if (parts[0] === 'mk' || parts[0] === 'en' || parts[0] === 'sr') {
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
    this.ticketService.bookTicket(this.currentLocale);
  }

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }
}
