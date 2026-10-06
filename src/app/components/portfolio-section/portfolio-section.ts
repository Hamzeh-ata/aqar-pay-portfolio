import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-portfolio-section',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './portfolio-section.html',
})
export class PortfolioSection {
  protected readonly buildings = [
    { id: 'b1', name: 'Al Noor Tower', units: 48 },
    { id: 'b2', name: 'Garden Residences', units: 36 },
    { id: 'b3', name: 'Harbor View', units: 22 },
  ];

  protected readonly floors = [
    { id: 'f1', buildingId: 'b1', label: 'Floor 1' },
    { id: 'f2', buildingId: 'b1', label: 'Floor 2' },
    { id: 'f3', buildingId: 'b1', label: 'Floor 3' },
    { id: 'f4', buildingId: 'b2', label: 'Floor 1' },
    { id: 'f5', buildingId: 'b2', label: 'Floor 2' },
    { id: 'f6', buildingId: 'b3', label: 'Floor 1' },
  ];

  protected readonly units = [
    { id: 'u1', floorId: 'f1', label: 'A-101', tenant: 'Demo Tenant A', status: 'occupied' as const },
    { id: 'u2', floorId: 'f1', label: 'A-102', tenant: 'Demo Tenant B', status: 'occupied' as const },
    { id: 'u3', floorId: 'f2', label: 'A-204', tenant: 'Demo Tenant C', status: 'occupied' as const },
    { id: 'u4', floorId: 'f2', label: 'A-205', tenant: '—', status: 'vacant' as const },
    { id: 'u5', floorId: 'f3', label: 'B-012', tenant: 'Demo Tenant D', status: 'maintenance' as const },
    { id: 'u6', floorId: 'f4', label: 'G-301', tenant: 'Demo Tenant E', status: 'occupied' as const },
    { id: 'u7', floorId: 'f5', label: 'G-402', tenant: 'Demo Tenant F', status: 'occupied' as const },
    { id: 'u8', floorId: 'f6', label: 'H-101', tenant: '—', status: 'vacant' as const },
  ];

  protected readonly selectedBuilding = signal('b1');
  protected readonly selectedFloor = signal('f1');
  protected readonly selectedUnit = signal('u1');

  protected readonly visibleFloors = computed(() => {
    const buildingId = this.selectedBuilding();
    const result = [];
    for (const floor of this.floors) {
      if (floor.buildingId === buildingId) {
        result.push(floor);
      }
    }
    return result;
  });

  protected readonly visibleUnits = computed(() => {
    const floorId = this.selectedFloor();
    const result = [];
    for (const unit of this.units) {
      if (unit.floorId === floorId) {
        result.push(unit);
      }
    }
    return result;
  });

  protected readonly activeUnit = computed(() => {
    const unitId = this.selectedUnit();
    for (const unit of this.units) {
      if (unit.id === unitId) {
        return unit;
      }
    }
    return this.units[0];
  });

  protected readonly activeFloorLabel = computed(() => {
    const floorId = this.selectedFloor();
    for (const floor of this.floors) {
      if (floor.id === floorId) {
        return floor.label;
      }
    }
    return '';
  });

  protected selectBuilding(id: string): void {
    this.selectedBuilding.set(id);
    const nextFloors = this.visibleFloors();
    if (nextFloors.length > 0) {
      this.selectedFloor.set(nextFloors[0].id);
      this.selectFirstUnitForFloor(nextFloors[0].id);
    }
  }

  protected selectFloor(id: string): void {
    this.selectedFloor.set(id);
    this.selectFirstUnitForFloor(id);
  }

  protected selectUnit(id: string): void {
    this.selectedUnit.set(id);
  }

  private selectFirstUnitForFloor(floorId: string): void {
    for (const unit of this.units) {
      if (unit.floorId === floorId) {
        this.selectedUnit.set(unit.id);
        return;
      }
    }
  }
}
