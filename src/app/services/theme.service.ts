import {Injectable, signal, effect, computed, Signal} from '@angular/core';

/**
 * ThemeService
 * - Uses Angular Signals to store and react to theme changes.
 * - Persists the user's preference in localStorage under `portfolio_theme`.
 * - Applies a `dark` CSS class on `document.documentElement` for global theming.
 *
 * Usage: provide in root (default) and inject where needed. The service exposes a
 * read-only `isDark` signal and a `toggle()` method to switch themes.
 */

@Injectable({providedIn: 'root'})
export class ThemeService {
  // Internal signal tracking dark mode state.
  private _isDark = signal<boolean>(this._initialTheme());

  // Public, readonly signal for consumers.
  readonly isDark: Signal<boolean> = computed(() => this._isDark());

  constructor() {
    // When theme changes, persist and update document class.
    effect(() => {
      const dark = this._isDark();
      try {
        localStorage.setItem('portfolio_theme', dark ? 'dark' : 'light');
      } catch (e) {
        // Ignore storage errors (e.g., private mode)
      }
      this._applyDocumentClass(dark);
    });
  }

  /** Toggle between dark and light */
  toggle() {
    this._isDark.update(v => !v);
  }

  /** Explicitly set theme */
  setDark(dark: boolean) {
    this._isDark.set(dark);
  }

  /** Helper to read initial theme preference */
  private _initialTheme(): boolean {
    try {
      const persisted = localStorage.getItem('portfolio_theme');
      if (persisted === 'dark') return true;
      if (persisted === 'light') return false;
    } catch (e) {
      // ignore
    }
    // sensible default: dark mode enabled
    return true;
  }

  /** Apply or remove the `dark` CSS class on the root element. */
  private _applyDocumentClass(dark: boolean) {
    if (typeof document === 'undefined') return; // SSR guard
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
  }
}
