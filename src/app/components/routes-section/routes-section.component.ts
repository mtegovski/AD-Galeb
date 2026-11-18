import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RelationCard, RouteOverview} from '../relation-card/relation-card';
import {
  BelgradeRelation,
  BitolaRelation,
  KochaniRelation,
  NisRelation,
  OhridRelation,
  SkopjeRelation,
} from '../../data/relations.data';
import {CITIES} from '../../data/trip-selector.data';
import {loadLastSearch} from '../../utils/last-search.util';

const FEATURED: RouteOverview[] = [
  OhridRelation, SkopjeRelation, BitolaRelation, KochaniRelation, NisRelation, BelgradeRelation,
];
const INTERNATIONAL = new Set(['NIS', 'JAG', 'BEG']);

@Component({
  selector: 'app-routes-section',
  imports: [
    RelationCard,
    RouterLink
  ],
  templateUrl: './routes-section.component.html'
})
export class RoutesSectionComponent {
  /** The featured routes, with the visitor's last intercity search first (the grid stays at six cards) */
  protected readonly relations = withLastSearchFirst(FEATURED);
}

function withLastSearchFirst(featured: RouteOverview[]): RouteOverview[] {
  const last = loadLastSearch('intercity');
  const known = (id: string | undefined) => CITIES.some(c => c.id === id);
  if (!last || !known(last.from) || !known(last.to) || last.from === last.to) return featured;

  const isLast = (r: RouteOverview) => r.origin === last.from && r.destination === last.to;
  const match = featured.find(isLast);
  const lastCard: RouteOverview = {
    ...(match ?? {origin: last.from, destination: last.to, info: '', isInternational: INTERNATIONAL.has(last.to)}),
    isLastSearch: true,
  };
  const rest = featured.filter(r => !isLast(r));
  return [lastCard, ...rest].slice(0, featured.length);
}
