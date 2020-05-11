import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CheckComponent } from './check/check.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent, CheckComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule {
}
