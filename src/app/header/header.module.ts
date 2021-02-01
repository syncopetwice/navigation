import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { HistoryComponent } from './history/history.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule
  ],
  declarations: [
    HeaderComponent,
    SubheaderComponent,
    UserMenuComponent,
    HistoryComponent,
    NavigationComponent,
  ],
  exports: [
    HeaderComponent,
    SubheaderComponent,
    UserMenuComponent,
    HistoryComponent,
    NavigationComponent,
  ],
})
export class HeaderModule { }
