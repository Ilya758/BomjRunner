import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GreetingPage } from './pages/greeting/greeting';
import { MainButtonsComponent } from './pages/main-buttons/main-buttons';
import { SettingsComponent } from './pages/settings/settings';
import { BackButtonComponent } from './components/back-button/back-button';
import { StatisticsComponent } from './pages/statistics/statistics';
import { LobbyComponent } from './pages/lobby/lobby';

@NgModule({
  declarations: [AppComponent, GreetingPage, MainButtonsComponent, SettingsComponent, StatisticsComponent, LobbyComponent, BackButtonComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
