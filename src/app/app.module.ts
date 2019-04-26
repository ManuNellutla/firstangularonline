import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Disc1Component } from './disc1/disc1.component';
import { View1Component } from './view1/view1.component';
import { DatarService } from './datar.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
  declarations: [ AppComponent, HelloComponent, Disc1Component, View1Component ],
  bootstrap:    [ AppComponent ],
  providers: [DatarService]
})
export class AppModule { }
