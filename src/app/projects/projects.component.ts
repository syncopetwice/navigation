import { Component, OnInit, ViewChild } from '@angular/core';
import { PortalService, Slot } from '../portal.service';
import { CdkPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private portalService: PortalService) {}

  @ViewChild(CdkPortal, { static: true }) public portal!: CdkPortal;

  public ngOnInit(): void {
    console.log('Portal', this.portal);
    this.portalService.set(Slot.Drawer, this.portal);
  }
}
