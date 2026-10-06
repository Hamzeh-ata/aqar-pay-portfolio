import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PrincipleItem } from '../../models/principle-item.model';

@Component({
  selector: 'app-why-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './why-section.html',
})
export class WhySection {
  protected readonly principles: PrincipleItem[] = [
    { titleKey: 'why.centralizedTitle', copyKey: 'why.centralizedCopy' },
    { titleKey: 'why.controlledTitle', copyKey: 'why.controlledCopy' },
    { titleKey: 'why.visibleTitle', copyKey: 'why.visibleCopy' },
    { titleKey: 'why.connectedTitle', copyKey: 'why.connectedCopy' },
  ];
}
