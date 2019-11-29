import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Sample01Component } from './components/sample01/sample01.component';

@NgModule({
  declarations: [
    Sample01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Sample01Component]
})
export class AppModule { }
