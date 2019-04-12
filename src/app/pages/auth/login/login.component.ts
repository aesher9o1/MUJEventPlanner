import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  fetching = false;
  login = {
    emailID: "",
    password: ""
  }
  errorMessage = ""
  isError: boolean = false;


  loginUser() {
    if (this.login.emailID.length < 4 || this.login.password.length < 1) {
      this.isError = true;
      this.errorMessage = "All fields are necessary"
    } else {
      this.afAuth.auth.signInWithEmailAndPassword(this.login.emailID, this.login.password).then(res => {
        this.router.navigate(['/loading'], { queryParams: { authUser: res.user.uid } });
      }, err => {
        this.isError = true;
        this.errorMessage = err.message
      })
    }
  }



  ngOnInit() {
  }

}
