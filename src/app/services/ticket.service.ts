import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  /**
   * Opens the Obilet booking page for tomorrow's date.
   * @param currentLocale The active language code ('mk' or 'en')
   */
  bookTicket(currentLocale: string): void {
    // 1. Calculate tomorrow's date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // 2. Format the date to YYYY-MM-DD
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const tomorrowDate = `${yyyy}-${mm}-${dd}`;

    // 3. Determine language (defaults to 'en' if not 'mk')
    const language = currentLocale === 'mk' ? 'mk' : 'en';

    // 4. Construct URL with the partner query parameter
    const targetUrl = `https://www.obilet.com/${language}/journeys/6776-1818/${tomorrowDate}?partner=19713`;

    // 5. Navigate (Opens in a new tab)
    window.open(targetUrl, '_blank');
  }
}
