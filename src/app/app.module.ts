import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from "angular2-moment";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ClockService } from "./clock.service";
import { ExchangeService } from "./exchange.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SortPipe } from './sort.pipe';
import { AppRoutingModule } from "./app-routing.module";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SortPipe,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LoadingAnimateModule.forRoot(),
    NgbModule.forRoot(),
    MomentModule
  ],
  providers: [ExchangeService, ClockService, LoadingAnimateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
