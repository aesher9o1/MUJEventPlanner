import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase) { }
  items: Observable<any[]>;

  ngOnInit() {

    console.log(this.afAuth.authState.subscribe(res => {
      if (res != null) {
        const firstParam: string = this.route.snapshot.queryParamMap.get('authUser');
        this.db.list('users/'+firstParam).valueChanges().subscribe(res => {
          
        })

      }
      else {
        this.router.navigate['/calender']
      }
    }))
  }



}
