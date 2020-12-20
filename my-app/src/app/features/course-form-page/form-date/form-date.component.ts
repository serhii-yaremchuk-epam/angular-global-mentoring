import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cp-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDateComponent {
  @Input() date!: Date;
  @Output() formDateChange = new EventEmitter<string>();

  onChange() {
    this.formDateChange.emit(this.date.toString());
  }
}
