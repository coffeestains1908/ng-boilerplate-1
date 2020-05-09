import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotauthorizedComponent} from './notauthorized/notauthorized.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'error',
    children: [
      {path: 'notauthorized', component: NotauthorizedComponent},
      {path: 'notfound', component: NotfoundComponent},
      {path: '**', redirectTo: 'notfound'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {
}
