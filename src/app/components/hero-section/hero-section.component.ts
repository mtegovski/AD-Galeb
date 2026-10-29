import {Component, inject, LOCALE_ID, signal} from '@angular/core';
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

  get currentLocale(): Locale {
    return detectLocale(splitPath(location.pathname));
  }

  get canSearch(): boolean {
    return !!this.from() && !!this.to() && this.from() !== this.to();
  }

  swapCities(): void {
    const from = this.from();
    this.from.set(this.to());
    this.to.set(from);
  }

  showTimetable(): void {
    if (!this.canSearch) return;
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
