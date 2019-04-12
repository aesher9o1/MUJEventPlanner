import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { CalenderComponent } from './pages/auth/calender/calender.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children:[
      {
        path:'calender',
        component: CalenderComponent
      },
      {
        path:'',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'loading',
    component: LoadingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren:'./pages/dashboard/dashboard.module#DashboardModule',
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
