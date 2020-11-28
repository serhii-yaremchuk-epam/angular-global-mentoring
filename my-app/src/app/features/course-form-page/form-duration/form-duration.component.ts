import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cp-form-duration',
  templateUrl: './form-duration.component.html',
  styleUrls: ['./form-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDurationComponent {
  @Input() duration?: number;
  @Output() durationChange = new EventEmitter<number>();

  onChange() {
    this.durationChange.emit(this.duration);
  }
}
