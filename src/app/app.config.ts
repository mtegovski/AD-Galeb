import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, Router } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),

    provideAppInitializer(() => {
      const saved = sessionStorage.getItem('postLocalePath');
      if (!saved) return;

      sessionStorage.removeItem('postLocalePath');

      const router = inject(Router);
      return router.navigateByUrl(saved);
    }),
  ],
};
