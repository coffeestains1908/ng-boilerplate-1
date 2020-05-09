import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', Validators.required),
    submitResult: new FormControl('')
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const data = this.formGroup.getRawValue();
    if (this.formGroup.valid) {
      this.authService.loginByEmail(data.email, data.pwd)
        .then(value => {
          if (value) {
            this.router.navigateByUrl('')
              .then(_ => {});
          } else {
            this.formGroup.controls.pwd.setErrors({usr_not_exist: true});
          }
        });
    }
  }
}
