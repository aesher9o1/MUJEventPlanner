import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { CryptonicsService } from './cryptonics.service';
import { params } from '../../environments/systemvars'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth, private encryptor: CryptonicsService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.afAuth.authState.subscribe(res => {
      if (res == null)
        return false
      else if (this.router.url == '/dashboard') {
        if (!!!localStorage.getItem('token')) {
          this.router.navigate(['/loading'], { queryParams: { authUser: this.encryptor.set(params.uname, res.uid) } });
        }
      }
    })
    return true;
  }
}
