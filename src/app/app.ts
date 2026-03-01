import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {}
