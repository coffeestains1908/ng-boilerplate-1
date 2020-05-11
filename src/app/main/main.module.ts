import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DrawerAppBarComponent } from './drawer-app-bar/drawer-app-bar.component';
import {MainRoutingModule} from './main-routing.module';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [MainComponent, DrawerAppBarComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
