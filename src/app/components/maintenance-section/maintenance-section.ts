import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-maintenance-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './maintenance-section.html',
})
export class MaintenanceSection {
  protected readonly flowSteps = [
    { id: 'request', labelKey: 'maintenanceFlow.request' },
    { id: 'assignment', labelKey: 'maintenanceFlow.assignment' },
    { id: 'visit', labelKey: 'maintenanceFlow.visit' },
    { id: 'photos', labelKey: 'maintenanceFlow.photos' },
    { id: 'status', labelKey: 'maintenanceFlow.status' },
    { id: 'resolution', labelKey: 'maintenanceFlow.resolution' },
  ];

  protected readonly activeStep = signal('request');

  protected selectStep(id: string): void {
    this.activeStep.set(id);
  }
}
