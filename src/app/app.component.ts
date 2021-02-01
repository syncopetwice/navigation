import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortalService } from './portal.service';
import { HeaderService } from './header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public portalService: PortalService, public headerService: HeaderService) {}

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {}

}
