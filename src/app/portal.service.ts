import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class PortalService {
  constructor(public zone: NgZone) {}

  private current = new Subject<TemplatePortal | ComponentPortal<any>>();

  readonly portal$ = this.current.asObservable();

  set(portal: TemplatePortal | ComponentPortal<any>): void {
    Promise.resolve(null).then(() => {
      this.current.next(portal);
    });
  }
}
