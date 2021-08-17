import { NgModule } from '@angular/core';
import { OhmLibComponent } from './ohm-lib.component';
import { HumanizePipe } from './humanize.pipe';



@NgModule({
  declarations: [OhmLibComponent, HumanizePipe],
  imports: [
  ],
  exports: [OhmLibComponent, HumanizePipe]
})
export class OhmLibModule { }
