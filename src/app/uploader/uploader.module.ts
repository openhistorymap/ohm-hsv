import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetadataComponent } from './metadata/metadata.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DialogComponent } from './dialog/dialog.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { LocatorComponent } from './locator/locator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AngleComponent } from './angle/angle.component';


@NgModule({
  declarations: [MetadataComponent, UploaderComponent, DialogComponent, LocatorComponent, AngleComponent],
  imports: [
    CommonModule,
    FormsModule,

    MatTabsModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatDialogModule, MetadataComponent, UploaderComponent, DialogComponent, LocatorComponent, AngleComponent]
})
export class UploaderModule { }
