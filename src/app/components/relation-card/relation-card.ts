import {Component, inject, Input, LOCALE_ID} from '@angular/core';
import {translateCity, translateCityInfo} from '../../utils/trip-selector.util';
import {Locale} from '../../utils/languages.util';

export interface RouteOverview {
  destination: string;
  info: string;
  isInternational: boolean;
}

@Component({
  selector: 'app-relation-card',
  imports: [],
  templateUrl: './relation-card.html',
})

export class RelationCard {
  @Input() relation: RouteOverview;
  protected readonly translateCity = translateCity;
  protected readonly translateCityInfo = translateCityInfo;
  locale = inject(LOCALE_ID) as Locale;
}
