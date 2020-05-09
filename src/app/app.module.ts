import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {AppRoutingModule} from './app-routing.module';
import {ErrorModule} from './error/error.module';
import {AuthModule} from './auth/auth.module';
import {FidacModule} from './fidac/fidac.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ErrorModule,
    AuthModule,
    FidacModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
