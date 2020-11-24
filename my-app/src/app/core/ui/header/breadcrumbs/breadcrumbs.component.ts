import { Component } from '@angular/core';
import { BreadcrumbsService } from '../../../services/breadcrumbs.service';

@Component({
  selector: 'cp-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  constructor(public breadcrumbsService: BreadcrumbsService) {
  }
}
