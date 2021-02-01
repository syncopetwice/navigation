import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { PortalService, Slot } from 'src/app/portal.service';

@Component({
  selector: 'ds-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

  constructor(
    private portalService: PortalService
  ) { }

  public portal$!: Observable<TemplatePortal | ComponentPortal<any>>;

  ngOnInit(): void {
    // this.portal$ = this.portalService.portals.get(Slot.Drawer);
  }

  public handleBackAction(): void {}

}
