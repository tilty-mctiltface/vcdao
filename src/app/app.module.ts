import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RewardsComponent} from './components/rewards/rewards.component';
import {WebPlatformComponent} from './components/web-platform/web-platform.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {PoolDialogComponent} from './components/shared/dialogs/pool/pool-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AdvancedComponent} from './components/dashboard/advanced/advanced.component';
import {SimpleComponent} from './components/dashboard/simple/simple.component';
import {ProComponent} from './components/dashboard/pro/pro.component';
import {SearchBarComponent} from './components/shared/search-bar/search-bar.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {MatDividerModule} from "@angular/material/divider";
import {InvestmentChartComponent} from './components/shared/investment-chart/investment-chart.component';
import {InvestmentPercentageIncreaseComponent} from './components/shared/investment-percentage-increase/percentage-increase.component';
import {InvestmentValueComponent} from './components/shared/investment-value/investment-value.component';
import {CardWrapperComponent} from './components/shared/card-wrapper/card-wrapper.component';
import {MatRadioModule} from '@angular/material/radio';
import {PoolListComponent} from './components/shared/pool-list/pool-list.component';
import {PoolListWrapperComponent} from './components/shared/pool-list-wrapper/pool-list-wrapper.component';
import {HttpClientModule} from "@angular/common/http";
import {PodHealthComponent} from './components/pod-health/pod-health.component';
import {HealthClassPipe} from './components/pod-health/health-class-pipe/health-class.pipe';
import {ValueLockedComponent} from './components/value-locked/value-locked.component';
import {CoinRatioComponent} from './components/coin-ratio/coin-ratio.component';
import {PodDataWrapperComponent} from './components/pod-data-wrapper/pod-data-wrapper.component';
import {CountUpModule} from "ngx-countup";
import {FlexLayoutModule} from "@angular/flex-layout";
import { RunningTickerComponent } from './components/running-ticker/running-ticker.component';
import { NftcardComponent } from './components/shared/nftcard/nftcard.component';
import { PreLaunchLandingComponent } from './components/pre-launch-landing/pre-launch-landing.component';
import { ClockComponent } from './components/shared/clock/clock.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    RewardsComponent,
    WebPlatformComponent,
    PoolDialogComponent,
    AdvancedComponent,
    SimpleComponent,
    ProComponent,
    SearchBarComponent,
    FooterComponent,
    InvestmentChartComponent,
    InvestmentPercentageIncreaseComponent,
    InvestmentValueComponent,
    CardWrapperComponent,
    PoolListComponent,
    PoolListWrapperComponent,
    PodHealthComponent,
    ValueLockedComponent,
    CoinRatioComponent,
    HealthClassPipe,
    PodDataWrapperComponent,
    RunningTickerComponent,
    NftcardComponent,
    PreLaunchLandingComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    NgxChartsModule,
    MatRadioModule,
    CountUpModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
