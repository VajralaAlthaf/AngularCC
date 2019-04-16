import { Injectable } from '@angular/core';
import { USERS } from './users';
import { AuthService } from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  user;
  users = USERS;
  clientId = '77885596074-e50hrjrjh89tr02hqdvrt9rsnuiph31g.apps.googleusercontent.com';
  secret = 'hvef3HX-78eOiVV_wbsYKmj5';
  constructor(private authService: AuthService ) { }

  loginFlag = false;

signOut() {
  this.authService.signOut(true);
  this.resetUser();
}

  login(credentials) {
    console.log('hit');
    const users = this.users.filter(
      user => (
        ((user.email === credentials.username) || (user.username === credentials.username)) && (user.password === credentials.password))
    );
    this.user = users[0];
    return this.user;
  }

  setUser(userEmail) {
    const users = this.users.filter(
      user => (user.email === userEmail)
    );
     this.user = users[0];
  }
  resetUser() {
    this.user = null;
  }
  getUsers() {
    return this.users;
  }
  addUser(user) {
    this.users.push(user);
    return true;
  }
  getUser(username) {
    const users = this.users.filter(
      user => (user.username === username || user.email === username)
    );
    return users[0];

  }
  updateUser(newUser) {
    const l = this.users.length;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === newUser.username || this.users[i].email === newUser.email) {
        const keys = Object.keys(this.users[i]);
        keys.forEach(key => {
          if (!newUser[key]) {
            newUser[key] = this.users[i][key];
          }
        });
        this.users.splice(i, 1);
        this.users.push(newUser);
      }
    }
    return true;
  }

}
