import { Component, OnInit, } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username;
  user;
  isUserUpdated = false;

  constructor(private service: AppserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (!this.service.user) {
      this.router.navigateByUrl('/home');
    } else {
      this.username = this.route.snapshot.params.username;
      console.log(this.username);
      if (this.username) {
        this.user = this.service.getUser(this.username);
        console.log(this.user);
      } else {
        this.user = this.service.getUser(this.service.user.username);
      }
    }
  }
  updateUser(user) {
    this.isUserUpdated = this.service.updateUser(user);
    console.log(this.isUserUpdated);
    setTimeout(() => this.isUserUpdated = false, 3000);
  }

  updateSubscription(subscription) {
    console.log(subscription);
    const displayPayment = confirm('Do you want to update your subscription');
    if (displayPayment) {
      this.router.navigateByUrl('/payment');
    }
  }

}
