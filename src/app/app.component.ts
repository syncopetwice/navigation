import { Component, OnInit,  ChangeDetectorRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { NavigationComponent } from './app-header/navigation/navigation.component';
import { Observable } from 'rxjs';
import { PortalService } from './portal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public portalService: PortalService,
    private cdr: ChangeDetectorRef
  ) {}

  public drawer!: ComponentPortal<any>;

  public portal$!: Observable<TemplatePortal | ComponentPortal<any>>;

  public isNavigationOpened: boolean = false;
  public fixedToTopGap: number = 0;

  public handleSidenavToggle(ev: any): void {
    this.isNavigationOpened = ev.isOpened;
    this.fixedToTopGap = ev.fixedToTopGap;
  }

  public ngOnInit(): void {
    this.portal$ = this.portalService.portal$;
    this.cdr.detectChanges();
  }

}
