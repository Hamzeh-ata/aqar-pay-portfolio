import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { RoleOption } from '../../models/role-option.model';

@Component({
  selector: 'app-roles-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './roles-section.html',
})
export class RolesSection {
  protected readonly roles: RoleOption[] = [
    { id: 'owner', labelKey: 'rolesList.owner', copyKey: 'roleCopy.owner' },
    { id: 'manager', labelKey: 'rolesList.manager', copyKey: 'roleCopy.manager' },
    { id: 'accountant', labelKey: 'rolesList.accountant', copyKey: 'roleCopy.accountant' },
    { id: 'field', labelKey: 'rolesList.field', copyKey: 'roleCopy.field' },
  ];

  protected readonly activeRole = signal('owner');

  protected readonly activeRoleOption = computed(() => {
    const id = this.activeRole();
    for (const role of this.roles) {
      if (role.id === id) {
        return role;
      }
    }
    return this.roles[0];
  });

  protected selectRole(id: string): void {
    this.activeRole.set(id);
  }
}
