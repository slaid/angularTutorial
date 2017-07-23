import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdNativeDateModule
} from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule
  ]
})

export class MaterialModule {}
