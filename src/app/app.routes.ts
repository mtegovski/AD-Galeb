import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AboutUsComponent} from './components/about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'trips',
    loadComponent: () =>
      import('./components/trip-selector/trip-selector.component')
        .then(m => m.TripSelectorComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about-us/about-us.component')
        .then(m => m.AboutUsComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component')
        .then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
