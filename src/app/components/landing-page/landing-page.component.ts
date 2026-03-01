import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { RoutesSectionComponent } from '../routes-section/routes-section.component';
import { WhyChooseSectionComponent } from '../why-choose-section/why-choose-section.component';
import { SiteFooterComponent } from '../site-footer/site-footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    RoutesSectionComponent,
    WhyChooseSectionComponent,
  ],
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {}
