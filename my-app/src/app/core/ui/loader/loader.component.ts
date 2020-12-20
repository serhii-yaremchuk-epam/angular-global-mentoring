import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'cp-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {
  }
}
