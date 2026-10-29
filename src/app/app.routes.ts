import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, title: $localize`:@@pageTitleHome:АД Галеб - Охрид` },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'trips',
    pathMatch: 'full',
    title: $localize`:@@pageTitleTrips:Релации и цени | АД Галеб`,
    data: { mode: 'intercity' },
    loadComponent: () =>
      import('./components/trip-selector/trip-selector.component')
        .then(m => m.TripSelectorComponent),
  },
  {
    path: 'trips/local',
    title: $localize`:@@pageTitleLocalTrips:Локални релации | АД Галеб`,
    data: { mode: 'local' },
    loadComponent: () =>
      import('./components/trip-selector/trip-selector.component')
        .then(m => m.TripSelectorComponent),
  },
  // Old URL of the local routes page
  { path: 'trips-local', redirectTo: 'trips/local', pathMatch: 'full' },
  {
    path: 'about',
    title: $localize`:@@pageTitleAbout:За нас | АД Галеб`,
    loadComponent: () =>
      import('./components/about-us/about-us.component')
        .then(m => m.AboutUsComponent),
  },
  {
    path: 'contact',
    title: $localize`:@@pageTitleContact:Контакт | АД Галеб`,
    loadComponent: () =>
      import('./components/contact/contact.component')
        .then(m => m.ContactComponent),
  },
  {
    path: 'faq',
    title: $localize`:@@pageTitleFaq:Најчесто поставувани прашања | АД Галеб`,
    loadComponent: () =>
      import('./components/faq/faq.component')
        .then(m => m.FaqComponent),
  },
  { path: '**', redirectTo: '' },
];
