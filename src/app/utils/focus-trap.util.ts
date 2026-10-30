const FOCUSABLE =
  'a[href], button:not([disabled]), select:not([disabled]), input:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

/**
 * Keeps Tab / Shift+Tab focus inside a dialog: from the last focusable element it wraps
 * to the first, and the other way round. Call it from a keydown handler for the Tab key.
 */
export const trapTabKey = (event: KeyboardEvent, container: HTMLElement): void => {
  const items = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE))
    .filter(el => el.getClientRects().length > 0);
  if (items.length === 0) return;

  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && (active === first || !container.contains(active))) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (active === last || !container.contains(active))) {
    event.preventDefault();
    first.focus();
  }
};
