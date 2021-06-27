import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {PoolsComponent} from "./pools/pools.component";
import {WebPlatformComponent} from "./web-platform/web-platform.component";
import {RewardsComponent} from "./rewards/rewards.component";
import {DashboardComponent} from "./statistics/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'app',
    component: WebPlatformComponent,
    children: [
      {
        path: 'pools',
        component: PoolsComponent
      },
      {
        path: 'rewards',
        component: RewardsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
