import { Injectable } from '@angular/core';

export const DEFAULT_SIDEBAR_HEIGHT = 48;

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public isSidenavOpened: boolean = false;
  public gap: number = DEFAULT_SIDEBAR_HEIGHT;

  public toggle(state: boolean, height: number = DEFAULT_SIDEBAR_HEIGHT): void {
    console.log('Toggle', state);
    this.isSidenavOpened = !state;
    this.gap = height;
  }

  constructor() { }
}
