import {Component, ElementRef, OnInit, viewChild} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import {filter, skip} from 'rxjs';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private main = viewChild.required<ElementRef<HTMLElement>>('main');

  constructor(private router: Router) {}

  /**
   * The skip link moves focus to the page content instead of following its href,
   * which would resolve against the locale base href (/mk/) and leave the page.
   */
  skipToMain(event: Event): void {
    event.preventDefault();
    this.main().nativeElement.focus();
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      // The initial page view is already sent by gtag('config') in index.html
      skip(1)
    ).subscribe((event: NavigationEnd) => {
      // Manually send the new URL to Google Analytics
      gtag('config', 'G-3BTF44VZNN', {
        'page_path': event.urlAfterRedirects
      });
    });
  }
}
