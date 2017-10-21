import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './../app/components/root/app.component';
import { MainHeader } from './../app/components/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeader
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
