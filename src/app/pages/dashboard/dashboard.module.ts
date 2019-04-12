import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/home/home.component';
import { CreateeventsComponent } from './landing/createevents/createevents.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    LandingComponent,
    HomeComponent,
    CreateeventsComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DashboardModule { }
