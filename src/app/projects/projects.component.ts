import {
  Component,
  ViewChild,
  OnDestroy,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { PortalService } from '../portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  constructor(private portalService: PortalService, private router: Router) {}

  @ViewChild(CdkPortal, { static: true })
  public portal!: CdkPortal;

  public ngOnInit(): void {
    this.portalService.set(this.portal);
  }

  public ngOnDestroy(): void {
    this.portal.detach();
  }

  public route(): void {
    this.router.navigate(['transactions']);
  }
}
