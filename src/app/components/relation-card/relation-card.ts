import {Component, Input} from '@angular/core';

export interface RouteOverview {
  destination: string;
  info: string;
  length: string;
  price: TicketPriceModel;
  isInternational: boolean;
}

interface TicketPriceModel {
  oneWayTicket: number;
  returnTicket: number;
  studentTicket?: number;
}

@Component({
  selector: 'app-relation-card',
  imports: [],
  templateUrl: './relation-card.html',
})

export class RelationCard {
  @Input() relation: RouteOverview;
}
