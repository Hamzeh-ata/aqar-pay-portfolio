import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-trust-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './trust-section.html',
})
export class TrustSection {
  protected readonly trustItems: string[] = [
    'trustItems.multiCompany',
    'trustItems.permissions',
    'trustItems.isolation',
    'trustItems.auth',
    'trustItems.records',
    'trustItems.documents',
    'trustItems.audit',
  ];
}
