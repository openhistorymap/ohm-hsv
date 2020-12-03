import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataComponent } from './metadata/metadata.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DialogComponent } from './dialog/dialog.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MetadataComponent, UploaderComponent, DialogComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatTabsModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class UploaderModule { }
