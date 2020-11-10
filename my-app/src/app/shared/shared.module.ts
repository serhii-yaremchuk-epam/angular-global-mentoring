import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './pipes/duration.pipe';
import { FreshIndicatorDirective } from './directives/fresh-indicator.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [DurationPipe, FreshIndicatorDirective, OrderByPipe, FilterPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DurationPipe,
    FreshIndicatorDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
