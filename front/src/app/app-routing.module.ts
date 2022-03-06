import { CUSTOM_ELEMENTS_SCHEMA, NgModule }        from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MainButtonsComponent }                    from './pages/main-buttons/main-buttons';
import { StatisticsComponent }                     from './pages/statistics/statistics';
import { SettingsComponent }                       from './pages/settings/settings';
import { NotFoundComponent }                       from './pages/not-found/not-found';
import { LobbyComponent }                          from './pages/lobby/lobby';
import { StoreComponent }                          from './pages/store/store';
import { GreetingPage }                            from './pages/greeting/greeting';

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
