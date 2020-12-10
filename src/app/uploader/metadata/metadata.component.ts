import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MetadataComponent),
  multi: true
};
@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements ControlValueAccessor {
  private innerValue: any = {
    angle: 70,
    height: 1.60,
    direction: 0,
    type: 'photo',
    subtype: 'documentation',
    notes: '',
    dating: 'precise',
    license: 'pd'

  };

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {}
  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
  }  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

}
