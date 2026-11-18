import {Component, inject, Input, LOCALE_ID} from '@angular/core';
import {RouterLink} from '@angular/router';
import {translateCity, translateCityInfo} from '../../utils/trip-selector.util';
import {CITY_INFO_TRANSLATIONS} from '../../data/trip-selector.data';
import {Locale} from '../../utils/languages.util';

export interface RouteOverview {
  /** Departure city of the timetable the card links to */
  origin: string;
  destination: string;
  info: string;
  isInternational: boolean;
  /** The visitor's last timetable search, shown first on the home page */
  isLastSearch?: boolean;
}

@Component({
  selector: 'app-relation-card',
  imports: [RouterLink],
  templateUrl: './relation-card.html',
})

export class RelationCard {
  @Input() relation: RouteOverview;
  protected readonly translateCity = translateCity;
  protected readonly translateCityInfo = translateCityInfo;
  locale = inject(LOCALE_ID) as Locale;

  get hasCityInfo(): boolean {
    return !!CITY_INFO_TRANSLATIONS[this.relation.destination];
  }
}
