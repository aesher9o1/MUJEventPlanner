import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { CalenderComponent } from './pages/auth/calender/calender.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children:[
      {
        path:'',
        component: CalenderComponent
      },
      {
        path:'login',
        component: LoginComponent
      }
    ]
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
