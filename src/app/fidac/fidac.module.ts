import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FidacComponent } from './fidac.component';
import {FidacRoutingModule} from './fidac-routing.module';



@NgModule({
  declarations: [FidacComponent],
  imports: [
    CommonModule,
    FidacRoutingModule
  ]
})
export class FidacModule { }
