import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-site-footer',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {

  currentYear = new Date().getFullYear();
}
