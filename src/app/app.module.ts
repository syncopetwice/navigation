import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './app-header/app-header.component';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PortalModule } from '@angular/cdk/portal';

import { HttpClientModule } from '@angular/common/http';
import { IconService } from './icon.service';
import { UserMenuComponent } from './app-header/user-menu/user-menu.component';
import { HistoryComponent } from './app-header/history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppSubheaderComponent } from './app-header/app-subheader/app-subheader.component';
import { NavigationComponent } from './app-header/navigation/navigation.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UserMenuComponent,
    HistoryComponent,
    ProjectsComponent,
    AppSubheaderComponent,
    NavigationComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    PortalModule,
  ],

  providers: [MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}
