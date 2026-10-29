import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { detectLocale, Locale, splitPath } from '../../utils/languages.util';
import { TicketService } from '../../services/ticket.service';

interface LocaleOption {
  code: Locale;
  label: string;
  name: string;
  flagSrc: string;
}

@Component({
  selector: 'app-site-header',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent {
  ticketService = inject(TicketService);
  private document = inject(DOCUMENT);

  isMobileMenuOpen = signal(false);
  isLanguageMenuOpen = signal(false);
  private languageMenu = viewChild<ElementRef<HTMLElement>>('languageMenu');
  /** The header gets slimmer once the page is scrolled */
  isScrolled = signal(false);

  readonly locales: LocaleOption[] = [
    { code: 'mk', label: 'MK', name: 'Македонски', flagSrc: 'assets/mk_flag.svg' },
    { code: 'en', label: 'EN', name: 'English', flagSrc: 'assets/en_flag.svg' },
    { code: 'sr', label: 'SR', name: 'Српски', flagSrc: 'assets/sr_flag.svg' },
  ];

  get currentLocale(): Locale {
    return detectLocale(splitPath(location.pathname));
  }

  get currentLocaleOption(): LocaleOption {
    return this.locales.find(locale => locale.code === this.currentLocale) ?? this.locales[0];
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobileMenu();
    this.isLanguageMenuOpen.set(false);
  }

  /** Closes the language dropdown when clicking anywhere outside of it */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.languageMenu()?.nativeElement.contains(event.target as Node)) {
      this.isLanguageMenuOpen.set(false);
    }
  }

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen.update(open => !open);
  }

  openMobileMenu(): void {
    this.isMobileMenuOpen.set(true);
    // Keep the page behind the menu panel from scrolling
    this.document.body.style.overflow = 'hidden';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.document.body.style.overflow = '';
  }

  switchLocale(next: Locale): void {
    if (next === this.currentLocale) return;

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
}
