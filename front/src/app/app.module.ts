import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { MainButtonsComponent } from './pages/main-buttons/main-buttons';
import { MainButtonComponent }  from './components/main-button/main-button';
import { StatisticsComponent }  from './pages/statistics/statistics';
import { SettingsComponent }    from './pages/settings/settings';
import { AppRoutingModule }     from './app-routing.module';
import { LobbyComponent }       from './pages/lobby/lobby';
import { AppComponent }         from './app.component';
import { GreetingPage }         from './pages/greeting/greeting';

@NgModule({
  declarations: [
    AppComponent,
    GreetingPage,
    MainButtonsComponent,
    SettingsComponent,
    StatisticsComponent,
    LobbyComponent,
    MainButtonComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
