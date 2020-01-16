import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string = '';
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('LoginUser');

    if (this.username == null) {
      // alert('Login Success! ' + this.username);
      this.router.navigate(['/login']);
    }
    else {

    }

  }

  goBack(): void {
    this.location.back();
  }
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
