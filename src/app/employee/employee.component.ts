import { Component, OnInit } from '@angular/core';
import { USERS } from '../LoginData';
import { LoginModel } from '../LoginModel';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: LoginModel[] = [];
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.empList();
  }

  empList() {
    this.employee = USERS;
  }

  goBack(): void {
    this.location.back();
  }
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
