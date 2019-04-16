import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router} from '@angular/router';
import {AppserviceService} from '../appservice.service';
import {HttpClient} from '@angular/common/http';
import { AuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { inherits } from 'util';

// imports google sign in api variable
declare const gapi;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('customBtn')
public customBtn: ElementRef;


private user: SocialUser;
private loggedIn: boolean;
register = false;
login = true;
isUserAdded = false;

accessToken;
userID;
// google authentication variable
public auth2: any;

  constructor(private router: Router, private service: AppserviceService, private httpClient: HttpClient, private element: ElementRef,
     private authService: AuthService) {
   }



  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
      }

  setRegister() {
    console.log('reg');
    this.register = true;
    this.login = false;
  }
  signIn(values) {
    //  console.log(values);
     const user = this.service.login(values);
        console.log(user);
        this.router.navigateByUrl('/home');
  }
  signUp(values) {
    console.log(values);
    this.register = false;
    this.login = true;
    values['payment_status'] = 'Past due';
    values['subscription'] = 'S';
    this.isUserAdded = this.service.addUser(values);
  }

  // facebook  signin

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      console.log(res);
      const user = this.service.getUser(res.email);
      if (user) {
        this.service.setUser(res.email);
        this.router.navigateByUrl('/home');
      } else {
        this.service.addUser(
          {
            firstname : res.firstName,
            lastname : res.lastName,
            email : res.email
          }
        );
        this.service.setUser(res.email);
        this.router.navigateByUrl('/profile');
      }
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => {
      console.log(res);
      const user = this.service.getUser(res.email);
      if (user) {
        this.service.setUser(res.email);
        this.router.navigateByUrl('/home');
      } else {
        this.service.addUser(
          {
            firstname : res.firstName,
            lastname : res.lastName,
            email : res.email
          }
        );
        this.service.setUser(res.email);
        this.router.navigateByUrl('/profile');
      }
    });
  }


  // google sign in


  // public attachSignin(element) {
  //   this.auth2.attachClickHandler(element, {}, (googleUser) => {
  //     const profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  //   this.service.addUser({'email' : profile.getEmail(), 'firstname' : profile.getName()});
  //   this.service.setUser(profile.getEmail());
  //   this.service.getUser(profile.getEmail());
  //   this.router.navigateByUrl('/home');
  //   }, (error) => {
  //     console.log(JSON.stringify(error, undefined, 2));
  //   });
  // }
  // ngAfterViewInit() {
  //   gapi.load('auth2', () => {
  //     this.auth2 = gapi.auth2.init({
  //       client_id : this.service.clientId,
  //       cookiepolicy : 'single_host_origin',
  //       scope : 'profile email'
  //     });
  //     this.attachSignin(this.customBtn.nativeElement);
  //   });
  // }

}
