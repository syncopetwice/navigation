import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

export const DEFAULT_SIDEBAR_HEIGHT = 48;

@Component({
  selector: 'ds-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {

  @ViewChild('nav') navigation!: ElementRef;

  @Output() public onSidenavTrigger: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  public isNavigationOpened: boolean = false;
  public fixedTopGap: number = DEFAULT_SIDEBAR_HEIGHT;

  public handleSidebarToggle(): void {
    this.fixedTopGap = this.navigation.nativeElement.offsetHeight || DEFAULT_SIDEBAR_HEIGHT;
    this.isNavigationOpened = !this.isNavigationOpened;
    console.log('x', this.fixedTopGap);
    this.onSidenavTrigger.emit({
      isOpened: this.isNavigationOpened,
      fixedToTopGap: this.fixedTopGap
    });
  }



}
