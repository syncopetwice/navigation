import { Component, OnInit, ViewChild } from '@angular/core';
import { PortalService, Slot } from '../portal.service';
import { CdkPortal } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private portalService: PortalService, private dialog: MatDialog) {}

  @ViewChild(CdkPortal, { static: true }) public portal!: CdkPortal;

  public ngOnInit(): void {}

}
