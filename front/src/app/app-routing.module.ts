import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found';
import { GreetingPage } from './pages/greeting/greeting';
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
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: 'lobby',
    component: LobbyComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
