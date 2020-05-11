import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TEST_USERS} from '../@core/users';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = null;
  userState = new Subject();
  isLoggedIn = false;
  cookieKey = 'app-token';
  sessionChecked = new Subject();

  constructor(
    private cookieService: CookieService,
  ) {
    this.userState.subscribe(value => {
      this.currentUser = value;
      this.isLoggedIn = !!value;

      if (this.isLoggedIn) {
        this.cookieService.set(this.cookieKey, this.currentUser.id);
      } else {
        this.cookieService.delete(this.cookieKey);
      }
    });
  }

  checkSession() {
    const session = this.cookieService.get(this.cookieKey);
    if (session !== undefined) {
      this.continueSession(session);
    } else {
      this.sessionChecked.next();
    }
  }

  continueSession(session) {
    // TODO: get user information by api
    session = +session;
    const user = TEST_USERS.find(value => {
      return value.id === session;
    });
    if (user) {
      this.userState.next(user);
    }
    this.sessionChecked.next();
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

  logout() {
    this.userState.next(null);
  }
}
