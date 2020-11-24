import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cp-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDateComponent {
  @Input() date?: Date;
}
