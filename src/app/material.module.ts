import {NgModule} from '@angular/core';
import {MdcButtonModule, MdcTypographyModule} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcTypographyModule
  ]
})
export class MaterialModule {
}
