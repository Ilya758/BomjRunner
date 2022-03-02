import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GreetingPage } from './pages/greeting/greeting.page';
import { MainButtonsComponent } from './pages/main-buttons/main-buttons';
import { SettingsComponent } from './pages/settings/settings';

@NgModule({
  declarations: [AppComponent, GreetingPage, MainButtonsComponent, SettingsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
