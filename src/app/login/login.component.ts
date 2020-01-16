import { Component, OnInit, Input } from '@angular/core';
import { LoginModel } from 'src/app/LoginModel';
import { NgModule } from '@angular/core';
import { USERS } from 'src/app/LoginData';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username: string = '';
  // password: string = '';
  // isrem: boolean = false;

  loginmodel: LoginModel;

  //{ username='', password='', isremeber=false };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(username: string, password: string, isrem: boolean) {
    if (username == "" || password == "") {
      alert('Enter Username and password!');
      return false;
    }
    else {
      if (USERS.find(x => x.username == username && x.password == password)) {
        localStorage.setItem('LoginUser', username);
        this.router.navigate(['/home']);
      }
      else {
        alert('incorrect username and password!');
      }
    }


    console.log(username + ' ' + password)
  }



}
