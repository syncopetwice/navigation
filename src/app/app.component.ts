import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isNavigationOpened: boolean = false;
  public fixedToTopGap: number = 0;

  public handleSidenavToggle(ev: any): void {
    this.isNavigationOpened = ev.isOpened;
    this.fixedToTopGap = ev.fixedToTopGap;
  }

}
