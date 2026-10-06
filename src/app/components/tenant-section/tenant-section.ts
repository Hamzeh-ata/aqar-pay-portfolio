import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-tenant-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './tenant-section.html',
})
export class TenantSection {
  protected readonly payments = [
    { period: 'Mar 2026', amount: 'Paid', status: 'ok' as const },
    { period: 'Feb 2026', amount: 'Paid', status: 'ok' as const },
    { period: 'Jan 2026', amount: 'Paid', status: 'ok' as const },
    { period: 'Dec 2025', amount: 'Pending', status: 'warn' as const },
  ];
}
