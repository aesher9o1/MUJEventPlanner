import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { params } from '../../../environments/systemvars'
import { CryptonicsService } from 'src/app/services/cryptonics.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase, private encryptor: CryptonicsService) { }
  items: Observable<any[]>;

  ngOnInit() {

    this.afAuth.authState.subscribe(res => {
      if (res != null) {
        const firstParam: string = this.route.snapshot.queryParamMap.get('authUser');
        this.db.list('users/' + this.encryptor.get(params.uname, firstParam)).valueChanges().subscribe(res => {
          localStorage.setItem('token','token');
          this.router.navigate  (['/dashboard']);
        })

      }
      else {
        this.router.navigate['/calender']
      }
    })
  }



}
