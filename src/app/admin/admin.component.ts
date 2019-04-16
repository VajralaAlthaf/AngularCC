import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../appservice.service';
import {USERS} from '../users';
import { Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users = USERS;
page = 1;
pageSize = 10;
  constructor(private service: AppserviceService, private router: Router) { }

  ngOnInit() {
    if (this.service.user) {
      if (this.service.user.isAdmin) {
        this.users = this.service.getUsers();
      } else {
         this.router.navigateByUrl('/home');
      }
    } else {
      this.router.navigateByUrl('/home');
   }

  }

  makeAdmin(user) {
    user['isAdmin'] = true;
    this.service.updateUser(user);
  }

}
