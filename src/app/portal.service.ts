import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CdkPortal } from '@angular/cdk/portal';

export enum Slot {
  Drawer,
  Subheader,
}

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  constructor() {}

  public portals: Map<Slot, CdkPortal> = new Map()
    .set(Slot.Drawer, new Subject())
    .set(Slot.Subheader, new Subject());

  set(slot: Slot, portal: CdkPortal): void {
    Promise.resolve(null).then(() => {
      this.portals.set(slot, portal);
    });
  }
}
