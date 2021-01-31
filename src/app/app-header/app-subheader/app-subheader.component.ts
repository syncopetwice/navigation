import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { PortalService, Slot } from 'src/app/portal.service';

@Component({
  selector: 'ds-app-subheader',
  templateUrl: './app-subheader.component.html',
  styleUrls: ['./app-subheader.component.scss']
})
export class AppSubheaderComponent implements OnInit {

  constructor(
    private portalService: PortalService
  ) { }

  public portal$!: Observable<TemplatePortal | ComponentPortal<any>>;

  ngOnInit(): void {
    // this.portal$ = this.portalService.portals.get(Slot.Drawer);
  }

  public handleBackAction(): void {}

}
