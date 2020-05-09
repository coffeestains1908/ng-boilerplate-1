import {NgModule} from '@angular/core';
import {MdcButtonModule, MdcCardModule, MdcTypographyModule} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcTypographyModule,
    MdcCardModule
  ]
})
export class MaterialModule {
}
