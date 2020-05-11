import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.subscription = this.authService.sessionChecked.subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigateByUrl('');
      } else {
        this.router.navigateByUrl('auth/login');
      }
      this.subscription.unsubscribe();
    });
    this.authService.checkSession();
  }

  ngOnInit(): void {
  }

}
