import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OhmSidebarComponent } from './ohm-sidebar/ohm-sidebar.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [OhmSidebarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule
  ],
  exports: [OhmSidebarComponent]
})
export class OhmCommonModule { }
