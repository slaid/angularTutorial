import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { JokeComponent } from './list/joke/joke.component';
import { FormComponent } from './list/form/form.component';
import { MaterialComponent } from './material/material.component';
import { DateComponent } from './date/date.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    JokeComponent,
    FormComponent,
    MaterialComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
