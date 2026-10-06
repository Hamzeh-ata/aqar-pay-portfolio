import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-billing-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './billing-section.html',
})
export class BillingSection {
  protected readonly flowSteps = [
    { id: 'invoice', labelKey: 'billingFlow.invoice' },
    { id: 'recorded', labelKey: 'billingFlow.recorded' },
    { id: 'confirmation', labelKey: 'billingFlow.confirmation' },
    { id: 'receipt', labelKey: 'billingFlow.receipt' },
    { id: 'statement', labelKey: 'billingFlow.statement' },
  ];

  protected readonly invoices = [
    { tenant: 'Demo Tenant A', invoice: 'INV-2401', amount: '1,200', status: 'ok' as const, statusLabel: 'Paid' },
    { tenant: 'Demo Tenant C', invoice: 'INV-2402', amount: '1,450', status: 'warn' as const, statusLabel: 'Pending' },
    { tenant: 'Demo Tenant D', invoice: 'INV-2403', amount: '980', status: 'danger' as const, statusLabel: 'Overdue' },
    { tenant: 'Demo Tenant E', invoice: 'INV-2404', amount: '1,100', status: 'ok' as const, statusLabel: 'Paid' },
  ];

  protected readonly activeStep = signal('invoice');

  protected selectStep(id: string): void {
    this.activeStep.set(id);
  }
}
