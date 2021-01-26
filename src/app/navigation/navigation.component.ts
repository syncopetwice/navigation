import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

export const DEFAULT_SIDEBAR_HEIGHT = 48;

@Component({
  selector: 'ds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  @ViewChild('nav') navigation!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  public isNavigationOpened: boolean = false;
  public fixedTopGap: number = DEFAULT_SIDEBAR_HEIGHT;

  public handleSidebarToggle(): void {
    this.fixedTopGap = this.navigation.nativeElement.offsetHeight || DEFAULT_SIDEBAR_HEIGHT;
    this.isNavigationOpened = !this.isNavigationOpened;
  }

  public handleBackAction(): void {}

}
