import { Component, HostListener, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly translate = inject(TranslateService);

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly currentLang = signal('en');

  protected readonly navLinks: NavLink[] = [
    { href: '#platform', labelKey: 'nav.platform' },
    { href: '#solutions', labelKey: 'nav.solutions' },
    { href: '#features', labelKey: 'nav.features' },
    { href: '#how-it-works', labelKey: 'nav.howItWorks' },
    { href: '#resources', labelKey: 'nav.resources' },
  ];

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 10);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected setLanguage(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.closeMenu();
  }
}
