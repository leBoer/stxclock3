import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'detail/:id', component: ExchangeDetailComponent },
  // { path: 'exchanges', component: ExchangesComponent },
  // { path: 'compact', component: CompactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
