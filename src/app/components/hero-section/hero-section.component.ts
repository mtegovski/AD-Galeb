import {Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import {detectLocale, Locale, splitPath} from '../../utils/languages.util';
import {TicketService} from '../../services/ticket.service';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent {
  private ticketService = inject(TicketService);

  get currentLocale(): Locale {
    return detectLocale(splitPath(location.pathname));
  }

  bookTicket(): void {
    this.ticketService.bookTicket(this.currentLocale);
  }
}
