import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation, Router, withInMemoryScrolling} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })),

    provideAppInitializer(() => {
      const saved = sessionStorage.getItem('postLocalePath');
      if (!saved) return;

      sessionStorage.removeItem('postLocalePath');

      const router = inject(Router);
      return router.navigateByUrl(saved);
    }),
  ],
};
