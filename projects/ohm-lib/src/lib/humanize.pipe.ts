import { Pipe, PipeTransform } from '@angular/core';
import { ConverterService } from './converter.service';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {

  constructor(
    private hsv: ConverterService
  ) { }

  transform(value: number, ...args: unknown[]): Date {
    return this.hsv.floatToDate(value);
  }

}
