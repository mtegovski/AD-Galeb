import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';

/* ── Promo configuration ──────────────────────────────────────────────
 * Swap these values to change the commercial.
 * Bump PROMO_ID whenever the image or link changes, so visitors who
 * already dismissed the previous promo get shown the new one.
 */
const PROMO_ID = 'promo-2026-08';
const PROMO_IMAGE = 'assets/lcs.png';
const PROMO_LINK = 'https://www.instagram.com/lychnid.coffee.society/';
const PROMO_ALT = 'Lychnid Coffee Society';

/** 'session' → once per browser session. 'local' → once per device, forever. */
const SHOW_ONCE_PER: 'session' | 'local' = 'session';

/** Delay before the popup appears, so it does not fight the first paint. */
const OPEN_DELAY_MS = 400;

@Component({
  selector: 'app-promo-modal',
  templateUrl: './promo-modal.component.html',
  standalone: true,
  styles: [
    `
      @keyframes promo-fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes promo-zoom-in {
        from {
          opacity: 0;
          transform: scale(0.94) translateY(12px);
        }
        to {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      .promo-backdrop {
        animation: promo-fade-in 200ms ease-out both;
      }

      .promo-panel {
        animation: promo-zoom-in 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      @media (prefers-reduced-motion: reduce) {
        .promo-backdrop,
        .promo-panel {
          animation: none;
        }
      }
    `,
  ],
})
export class PromoModalComponent implements OnInit, OnDestroy {
  readonly image = PROMO_IMAGE;
  readonly link = PROMO_LINK;
  readonly alt = PROMO_ALT;

  readonly open = signal(false);

  private openTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    if (this.alreadySeen()) return;

    this.markSeen();
    this.openTimer = setTimeout(() => this.show(), OPEN_DELAY_MS);
  }

  ngOnDestroy(): void {
    clearTimeout(this.openTimer);
    this.unlockScroll();
  }

  close(): void {
    this.open.set(false);
    this.unlockScroll();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) this.close();
  }

  /** A missing or broken image should not leave an empty box on screen. */
  onImageError(): void {
    this.close();
  }

  private show(): void {
    this.open.set(true);
    document.body.style.overflow = 'hidden';
  }

  private unlockScroll(): void {
    document.body.style.overflow = '';
  }

  private get storage(): Storage | null {
    try {
      return SHOW_ONCE_PER === 'session' ? sessionStorage : localStorage;
    } catch {
      // Storage can throw in private mode / with cookies blocked.
      return null;
    }
  }

  private alreadySeen(): boolean {
    return this.storage?.getItem(PROMO_ID) === 'seen';
  }

  private markSeen(): void {
    try {
      this.storage?.setItem(PROMO_ID, 'seen');
    } catch {
      // Ignore — worst case the promo shows again next visit.
    }
  }
}
