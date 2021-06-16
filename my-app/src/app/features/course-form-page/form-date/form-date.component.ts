import { Component, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'cp-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: FormDateComponent,
      multi: true
    }
  ]
})
export class FormDateComponent implements ControlValueAccessor, Validator {
  date!: string;

  constructor(private cd: ChangeDetectorRef) {
  }

  writeValue(value?: string) {
    let formattedValue: string;
    if (value) {
      formattedValue = (new Date(value)).toLocaleDateString();
    } else {
      formattedValue = '';
    }

    if (this.date !== formattedValue) {
      this.date = formattedValue;
      this.cd.markForCheck();
    }
  }

  propagateChange(date: string) {}
  registerOnChange(fn: () => void) {
    this.propagateChange = fn;
  }

  onTouched() {}
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onChange() {
    this.propagateChange(this.date.toString());
  }

  validate() {
    const dateRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    const isValid = this.date && dateRegex.test(this.date.toString());

    return (isValid) ? null : {
      dateFormat: 'Date format should be mm/dd/yyyy'
    };
  }
}
