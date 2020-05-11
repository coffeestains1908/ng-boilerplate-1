import {NgModule} from '@angular/core';
import {
  MdcButtonModule,
  MdcCardModule,
  MdcDrawerModule,
  MdcFormFieldModule, MdcIconModule,
  MdcListModule,
  MdcTextFieldModule, MdcTopAppBarModule,
  MdcTypographyModule
} from '@angular-mdc/web';

@NgModule({
  exports: [
    MdcButtonModule,
    MdcTypographyModule,
    MdcCardModule,
    MdcFormFieldModule,
    MdcTextFieldModule,
    MdcListModule,
    MdcDrawerModule,
    MdcTopAppBarModule,
    MdcIconModule
  ]
})
export class MaterialModule {
}
