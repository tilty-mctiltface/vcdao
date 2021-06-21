import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {LandingPageComponent} from './landing-page/landing-page.component';
import {PoolsComponent} from './pools/pools.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {RewardsComponent} from './rewards/rewards.component';
import {WebPlatformComponent} from './web-platform/web-platform.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PoolDialogComponent } from './shared/dialogs/pool/pool-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AdvancedComponent } from './statistics/advanced/advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PoolsComponent,
    StatisticsComponent,
    RewardsComponent,
    WebPlatformComponent,
    PoolDialogComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
