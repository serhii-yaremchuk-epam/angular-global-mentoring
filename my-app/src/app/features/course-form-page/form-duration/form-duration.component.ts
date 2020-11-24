import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cp-form-duration',
  templateUrl: './form-duration.component.html',
  styleUrls: ['./form-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDurationComponent {
  @Input() duration?: number;
}
