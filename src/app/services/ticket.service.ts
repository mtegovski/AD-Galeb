import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  /**
   * Opens the Obilet booking page for tomorrow's date.
   * @param currentLocale The active language code ('mk', 'en' or 'sr')
   */
  bookTicket(currentLocale: string): void {
    // 1. Calculate tomorrow's date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // 2. Determine language (defaults to 'en' if not 'mk')
    // Construct URL with the partner query parameter
    let targetUrl;

    switch (currentLocale) {
      case 'mk':
        targetUrl = 'https://galeb.obilet.mk/en';
        break;
      case 'en':
        targetUrl = 'https://galeb.obilet.mk/en';
        break;
      case 'sr':
        targetUrl = 'https://galeb.obilet.mk/';
        break;
      default:
        targetUrl = 'https://galeb.obilet.mk/en';
        break;
    }

    // 3. Navigate (Opens in a new tab)
    window.open(targetUrl, '_blank');
  }
}
