import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-trust-strip',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './trust-strip.html',
})
export class TrustStrip {
  protected readonly steps = [
    'flow.properties',
    'flow.units',
    'flow.tenants',
    'flow.contracts',
    'flow.billing',
    'flow.collections',
    'flow.utilities',
    'flow.maintenance',
    'flow.reports',
  ];
}
