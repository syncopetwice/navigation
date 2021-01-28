import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export class Route {
  public Id?: string = uuidv4();
  public label: string = '';
  public icon: string = '';

  constructor(args: Route) {
    this.label = args.label;
    this.icon = args.icon;
  }
}

@Component({
  selector: 'ds-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  public routes: Route[] = [
    new Route({
      icon: 'home',
      label: 'Home',
    }),

    new Route({
      icon: 'account_circle',
      label: 'Accounts & Contacts',
    }),

    new Route({
      icon: 'admin_panel_settings',
      label: 'Administration',
    }),

    new Route({
      icon: 'import_contacts',
      label: 'Catalog',
    }),

    new Route({
      icon: 'architecture',
      label: 'Design',
    }),

    new Route({
      icon: 'account_balance',
      label: 'Finance',
    }),

    new Route({
      icon: 'school',
      label: 'Learning',
    }),

    new Route({
      icon: 'border_outer',
      label: 'Logistics',
    }),

    new Route({
      icon: 'layers',
      label: 'Projects',
    }),

    new Route({
      icon: 'analytics',
      label: 'Reports',
    }),

    new Route({
      icon: 'live_help',
      label: `RFI's`,
    }),

    new Route({
      icon: 'attach_money',
      label: 'Sales',
    })
  ];

  public favourites: Route[] = [...this.routes].splice(0, 3);

  public isFavoritesCollapsed: boolean = false;

  constructor() {}

  ngOnInit(): void {}


  public trackById(index: number, i: any): string | number {
    return i.Id || index;
  }

  public handleRouteChange(route: Route): void {}

  public handleFavoritesToggle(state: boolean): void {
    this.isFavoritesCollapsed = !state;
  }


}
