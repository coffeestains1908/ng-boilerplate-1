import {NgModule} from '@angular/core';
import {MdcButtonModule, MdcCardModule, MdcFormFieldModule, MdcListModule, MdcTextFieldModule, MdcTypographyModule} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcTypographyModule,
    MdcCardModule,
    MdcFormFieldModule,
    MdcTextFieldModule,
    MdcListModule
  ]
})
export class MaterialModule {
}
