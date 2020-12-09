import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'cp-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
