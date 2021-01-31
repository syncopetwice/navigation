import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { PortalService, Slot } from './portal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public portalService: PortalService) {}

  public drawer!: ComponentPortal<any>;

  public portal!: any;

  public isNavigationOpened: boolean = false;
  public fixedToTopGap: number = 0;

  public handleSidenavToggle(ev: any): void {
    this.isNavigationOpened = ev.isOpened;
    this.fixedToTopGap = ev.fixedToTopGap;
  }

  public ngOnInit(): void {
    console.log('Portal', this.portal);
    this.portal = this.portalService.portals.get(Slot.Drawer);
  }

  public ngAfterViewInit(): void {}
}
