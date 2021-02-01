import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CdkPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class PortalService {

  public drawer: Subject<CdkPortal> = new Subject<CdkPortal>();
  readonly drawer$ = this.drawer.asObservable();

  public setDrawerPortal(portal: CdkPortal): void {
    this.drawer.next(portal);
  }

  constructor() {}

}
