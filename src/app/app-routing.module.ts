import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {WebPlatformComponent} from "./components/web-platform/web-platform.component";
import {RewardsComponent} from "./components/rewards/rewards.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {PreLaunchLandingComponent} from "./components/pre-launch-landing/pre-launch-landing.component";

const routes: Routes = [
  {
    path: '',
    component: PreLaunchLandingComponent
  },
  {
    path: 'app',
    component: WebPlatformComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
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
