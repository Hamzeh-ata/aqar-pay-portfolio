import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { NavLink } from '../../models/nav-link.model';

@Component({
  selector: 'app-site-footer',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  private readonly translate = inject(TranslateService);

  protected readonly currentLang = signal('en');

  protected readonly footerLinks: NavLink[] = [
    { href: '#platform', labelKey: 'footer.platform' },
    { href: '#solutions', labelKey: 'footer.solutions' },
    { href: '#features', labelKey: 'footer.features' },
    { href: '#how-it-works', labelKey: 'footer.howItWorks' },
    { href: '#demo', labelKey: 'footer.contact' },
  ];

  protected setLanguage(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
