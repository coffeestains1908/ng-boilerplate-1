import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../../@guards/AuthGuard';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
        path: '**',
        redirectTo: ''
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class MainRoutingModule {
}
