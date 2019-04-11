import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  fetching = false;
  login = {
    emailID:"",
    password:""
  }
  errorMessage = ""
  isError: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
