import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor() { }

  private current = new Subject<TemplatePortal | ComponentPortal<any>>();

  readonly portal$ = this.current.asObservable();

  set(portal: TemplatePortal | ComponentPortal<any>): void {
    this.current.next(portal);
  }

}
