import {Component, EventEmitter, inject, Input, LOCALE_ID, OnChanges, Output} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {StopLocation} from '../trip-selector/trip-selector.models';
import {Locale} from '../../utils/languages.util';
import {I18nSelectPipe} from '@angular/common';

@Component({
  selector: 'app-stop-map-modal',
  templateUrl: './stop-map-modal.component.html',
  standalone: true,
  imports: [
    I18nSelectPipe
  ]
})
export class StopMapModalComponent implements OnChanges {
  @Input() modalTitle: string = '';
  @Input() locations: StopLocation[] = [];
  @Output() closed = new EventEmitter<void>();

  private sanitizer = inject(DomSanitizer);
  locale = inject(LOCALE_ID) as Locale;

  selectedLocation: StopLocation | null = null;
  mapUrl: SafeResourceUrl | null = null;
  titleMapping: Record<string, string> = {
    'arrivalStops': $localize`:@@arrivalStops:Постојки на пристигнување`,
    'departureStops': $localize`:@@departureStops:Постојки на поаѓање`
  };

  ngOnChanges(): void {
    this.selectedLocation = this.locations[0] ?? null;
    this.mapUrl = this.buildMapUrl();
  }

  selectLocation(loc: StopLocation): void {
    this.selectedLocation = loc;
    this.mapUrl = this.buildMapUrl();
  }

  private buildMapUrl(): SafeResourceUrl | null {
    if (!this.selectedLocation) return null;
    const { lat, lng } = this.selectedLocation;
    const url = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openInGoogleMaps(): void {
    if (!this.selectedLocation) return;
    const { lat, lng } = this.selectedLocation;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  }

  getStopName(loc: StopLocation): string | undefined {
    switch (this.locale) {
      case 'en':
        return loc?.label?.en;
      case 'mk':
        return loc?.label?.mk;
      case 'sr':
        return loc?.label?.sr;
      default:
        return loc?.label?.en;
    }
  }
}
