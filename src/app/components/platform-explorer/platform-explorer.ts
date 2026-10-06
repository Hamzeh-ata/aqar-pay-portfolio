import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PlatformTab } from '../../models/platform-tab.model';

@Component({
  selector: 'app-platform-explorer',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './platform-explorer.html',
})
export class PlatformExplorer {
  protected readonly tabs: PlatformTab[] = [
    { id: 'portfolio', labelKey: 'platformTabs.portfolio', index: '01' },
    { id: 'tenants', labelKey: 'platformTabs.tenants', index: '02' },
    { id: 'contracts', labelKey: 'platformTabs.contracts', index: '03' },
    { id: 'billing', labelKey: 'platformTabs.billing', index: '04' },
    { id: 'collections', labelKey: 'platformTabs.collections', index: '05' },
    { id: 'utilities', labelKey: 'platformTabs.utilities', index: '06' },
    { id: 'maintenance', labelKey: 'platformTabs.maintenance', index: '07' },
    { id: 'reports', labelKey: 'platformTabs.reports', index: '08' },
  ];

  protected readonly activeId = signal('portfolio');

  protected readonly activeTab = computed(() => {
    const id = this.activeId();
    for (const tab of this.tabs) {
      if (tab.id === id) {
        return tab;
      }
    }
    return this.tabs[0];
  });

  protected selectTab(id: string): void {
    this.activeId.set(id);
  }
}
