import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islogin: boolean = false;
  username: string = null;
  constructor(private router: Router) { }
  ngOnInit() {
    this.username = localStorage.getItem('LoginUser');
    this.chklogin(this.username);
  }
  chklogin(username: string) {

    if (username != null) {
      this.islogin = true;
    }
    else {
      this.islogin = false;
    }
    //alert(username + ' ' + this.islogin);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
