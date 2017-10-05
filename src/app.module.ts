import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdIconModule,
  MdIconRegistry,
  MdInputModule,
  MdProgressBarModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule,
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdProgressBarModule,
    MdSidenavModule,
    MdTabsModule,
    MdToolbarModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
