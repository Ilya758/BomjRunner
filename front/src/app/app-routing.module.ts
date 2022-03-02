import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error';
import { GreetingPage } from './pages/greeting/greeting.page';
import { LobbyComponent } from './pages/lobby/lobby';
import { MainButtonsComponent } from './pages/main-buttons/main-buttons';
import { SettingsComponent } from './pages/settings/settings';
import { StatisticsComponent } from './pages/statistics/statistics';
import { StoreComponent } from './pages/store/store';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'greeting',
    pathMatch: 'full'
  },
  {
    path: 'greeting',
    component: GreetingPage,
    pathMatch: 'full',
  },
  {
    path: 'main-buttons',
    component: MainButtonsComponent,
    pathMatch: 'full',
  },
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full'
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: StoreComponent,
    pathMatch: 'full'
  },
  {
    path: 'error',
    component: ErrorComponent,
    pathMatch: 'full'
  },
  {
    path: 'lobby',
    component: LobbyComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/error'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
