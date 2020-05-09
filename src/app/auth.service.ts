import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TEST_USERS} from '../@core/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState = new Subject();
  isLoggedIn = false;

  constructor() {
    this.userState.subscribe(value => {
      this.isLoggedIn = !!value;
    });
  }

  loginByEmail(email: string, pwd: string): Promise<boolean> {
    return new Promise(resolve => {
      const user = TEST_USERS.find(value => value.email === email && value.pwd === pwd);
      if (user) {
        this.userState.next(user);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
}
