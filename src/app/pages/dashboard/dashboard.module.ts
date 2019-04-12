import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    EventsComponent
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
