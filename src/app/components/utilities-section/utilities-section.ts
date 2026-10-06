import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-utilities-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './utilities-section.html',
})
export class UtilitiesSection {
  protected readonly flowSteps = [
    { id: 'mobile', labelKey: 'utilityFlow.mobile' },
    { id: 'reading', labelKey: 'utilityFlow.reading' },
    { id: 'web', labelKey: 'utilityFlow.web' },
    { id: 'billing', labelKey: 'utilityFlow.billing' },
  ];

  protected readonly activeStep = signal('mobile');

  protected selectStep(id: string): void {
    this.activeStep.set(id);
  }
}
