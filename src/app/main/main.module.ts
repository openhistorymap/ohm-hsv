import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ViewerComponent } from './viewer/viewer.component';
import { MainComponent } from './main/main.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { TimelineComponent } from './timeline/timeline.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { PicComponent } from './pic/pic.component';
import { UploaderModule } from '../uploader/uploader.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';


export enum ExpeditionOrderState {
  PROCEED = "proceed",
  HOLD = "hold",
  ABORT = "abort"
}

type StandardEnum<T> = {
  [id: string]: T | string;
  [nu: number]: string;
}

export function deserializeExpeditionOrderState<T extends StandardEnum<string>> (tenum: T, value: string): keyof StandardEnum<string> {
  for (let key in tenum) {
    if (value == tenum[key]) {
      return tenum[key];
    }
  }
  return null;
}

@NgModule({
  declarations: [MapComponent, ViewerComponent, MainComponent, TimelineComponent, PicComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    CommonModule,
    UploaderModule,
  ],
  exports: [MainComponent]
})
export class MainModule { }
