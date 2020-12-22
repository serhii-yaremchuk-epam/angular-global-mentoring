import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

@Component({
  selector: 'cp-form-duration',
  templateUrl: './form-duration.component.html',
  styleUrls: ['./form-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: FormDurationComponent,
      multi: true
    }
  ]
})
export class FormDurationComponent implements ControlValueAccessor, Validator {
  duration?: number;

  constructor(private cd: ChangeDetectorRef) {
  }

  writeValue(value?: number) {
    if (this.duration !== value) {
      this.duration = value;
      this.cd.markForCheck();
    }
  }

  propagateChange(duration?: number) {}
  registerOnChange(fn: () => void) {
    this.propagateChange = fn;
  }

  onTouched() {}
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onChange() {
    this.propagateChange(this.duration);
  }

  validate() {
    const positiveNumberRegex = /^[1-9][0-9]*$/;
    const isValid = this.duration && positiveNumberRegex.test(this.duration.toString());

    return (isValid) ? null : {
      positiveNumber: 'Only positive number is allowed'
    };
  }
}
