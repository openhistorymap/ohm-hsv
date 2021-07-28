import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { UploaderModule } from './uploader/uploader.module';
import { CollectionComponent } from './collection/collection.component';
import { ExpoComponent } from './expo/expo.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ExpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    UploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
