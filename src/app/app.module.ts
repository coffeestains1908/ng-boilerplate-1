import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing.module';
import {ErrorModule} from './error/error.module';
import {AuthModule} from './auth/auth.module';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorModule,
    AuthModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
