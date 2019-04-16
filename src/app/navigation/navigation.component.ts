import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../appservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
user;
  constructor(private service: AppserviceService, private router: Router) { }

  ngOnInit() {
  // console.log(this.service.user);
  this.user = this.service.user;
  }

  signOut() {
    this.service.signOut();
    this.router.navigateByUrl('/login');
  }

}
