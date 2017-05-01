import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ClockService } from "./clock.service";
import { ExchangeService } from "./exchange.service";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoadingAnimateModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [ExchangeService, ClockService, LoadingAnimateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
