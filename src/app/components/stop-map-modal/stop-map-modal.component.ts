import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  LOCALE_ID,
  OnChanges,
  OnDestroy,
  Output,
  signal,
  viewChild
} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {StopLocation} from '../trip-selector/trip-selector.models';
import {Locale} from '../../utils/languages.util';
import {I18nSelectPipe} from '@angular/common';
import {trapTabKey} from '../../utils/focus-trap.util';

@Component({
  selector: 'app-stop-map-modal',
  templateUrl: './stop-map-modal.component.html',
  standalone: true,
  imports: [
    I18nSelectPipe
  ]
})
export class StopMapModalComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() modalTitle: string = '';
  @Input() locations: StopLocation[] = [];
  @Output() closed = new EventEmitter<void>();

  private sanitizer = inject(DomSanitizer);
  locale = inject(LOCALE_ID) as Locale;

  private panel = viewChild.required<ElementRef<HTMLElement>>('panel');
  private closeButton = viewChild.required<ElementRef<HTMLButtonElement>>('closeButton');
  /** The element that opened the popup (the map button); focus goes back there on close */
  private readonly openedFrom = document.activeElement as HTMLElement | null;

  isMapLoading = signal(true);
  selectedLocation: StopLocation | null = null;
  mapUrl: SafeResourceUrl | null = null;
  titleMapping: Record<string, string> = {
    'arrivalStops': $localize`:@@arrivalStops:Постојки на пристигнување`,
    'departureStops': $localize`:@@departureStops:Постојки на поаѓање`
  };

  ngAfterViewInit(): void {
    this.closeButton().nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.openedFrom?.focus();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closed.emit();
    } else if (event.key === 'Tab') {
      trapTabKey(event, this.panel().nativeElement);
    }
  }

  ngOnChanges(): void {
    this.selectedLocation = this.locations[0] ?? null;
    this.mapUrl = this.buildMapUrl();
  }

  selectLocation(loc: StopLocation): void {
    if (loc === this.selectedLocation) return;
    this.selectedLocation = loc;
    this.isMapLoading.set(true);
    this.mapUrl = this.buildMapUrl();
  }

  private buildMapUrl(): SafeResourceUrl | null {
    if (!this.selectedLocation) return null;
    const { lat, lng } = this.selectedLocation;
    const url = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get googleMapsUrl(): string | null {
    if (!this.selectedLocation) return null;
    const { lat, lng } = this.selectedLocation;
    return `https://www.google.com/maps?q=${lat},${lng}`;
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
