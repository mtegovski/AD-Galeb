import {Component, ElementRef, inject, LOCALE_ID, signal, viewChild} from '@angular/core';
import {Router} from '@angular/router';
import {detectLocale, Locale, splitPath} from '../../utils/languages.util';
import {TicketService} from '../../services/ticket.service';
import {CITIES} from '../../data/trip-selector.data';
import {translateCity} from '../../utils/trip-selector.util';
import {loadLastSearch} from '../../utils/last-search.util';
import {CityId} from '../trip-selector/trip-selector.models';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {
  private ticketService = inject(TicketService);
  private router = inject(Router);
  locale = inject(LOCALE_ID) as Locale;

  readonly cities = CITIES;

  // Prefilled with the visitor's last intercity search, otherwise empty
  private lastSearch = loadLastSearch('intercity');
  from = signal<CityId>(this.isKnownCity(this.lastSearch?.from) ? this.lastSearch!.from : '');
  to = signal<CityId>(this.isKnownCity(this.lastSearch?.to) ? this.lastSearch!.to : '');

  /** Why the last search attempt could not run: a city is missing, or both are the same */
  searchError = signal<'missing' | 'same' | null>(null);
  private fromSelect = viewChild.required<ElementRef<HTMLSelectElement>>('fromSelect');
  private toSelect = viewChild.required<ElementRef<HTMLSelectElement>>('toSelect');

  get currentLocale(): Locale {
    return detectLocale(splitPath(location.pathname));
  }

  swapCities(): void {
    const from = this.from();
    this.from.set(this.to());
    this.to.set(from);
    this.searchError.set(null);
  }

  showTimetable(): void {
    // Explain what is missing and put the cursor on the field to fix
    if (!this.from() || !this.to()) {
      this.searchError.set('missing');
      (this.from() ? this.toSelect() : this.fromSelect()).nativeElement.focus();
      return;
    }
    if (this.from() === this.to()) {
      this.searchError.set('same');
      this.toSelect().nativeElement.focus();
      return;
    }

    this.searchError.set(null);
    this.router.navigate(['/trips'], {queryParams: {from: this.from(), to: this.to()}});
  }

  bookTicket(): void {
    this.ticketService.bookTicket(this.currentLocale);
  }

  private isKnownCity(id: string | undefined): id is CityId {
    return !!id && this.cities.some(c => c.id === id);
  }

  protected readonly translateCity = translateCity;
}
