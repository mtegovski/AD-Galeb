import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {RelationCard} from '../relation-card/relation-card';
import {
  BelgradeRelation,
  BitolaRelation,
  KochaniRelation,
  NisRelation,
  OhridRelation,
  SkopjeRelation,
} from '../../data/relations.data';

@Component({
  selector: 'app-routes-section',
  imports: [
    RelationCard,
    RouterLink
  ],
  templateUrl: './routes-section.component.html'
})
export class RoutesSectionComponent {
  protected readonly SkopjeRelation = SkopjeRelation;
  protected readonly BitolaRelation = BitolaRelation;
  protected readonly OhridRelation = OhridRelation;
  protected readonly KochaniRelation = KochaniRelation;
  protected readonly BelgradeRelation = BelgradeRelation;
  protected readonly NisRelation = NisRelation;
}
