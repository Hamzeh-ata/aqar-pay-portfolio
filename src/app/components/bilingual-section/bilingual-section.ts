import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-bilingual-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './bilingual-section.html',
})
export class BilingualSection {
  protected readonly previewLang = signal<'en' | 'ar'>('en');

  protected setPreviewLang(lang: 'en' | 'ar'): void {
    this.previewLang.set(lang);
  }
}
