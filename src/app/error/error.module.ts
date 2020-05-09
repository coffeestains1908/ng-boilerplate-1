import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import {NotauthorizedComponent} from './notauthorized/notauthorized.component';
import { ErrorComponent } from './error.component';
import {ErrorRoutingModule} from './error-routing.module';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [NotfoundComponent, NotauthorizedComponent, ErrorComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    MaterialModule,
  ],
})
export class ErrorModule {
}
