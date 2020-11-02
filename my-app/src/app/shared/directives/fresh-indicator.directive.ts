import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[cpFreshIndicator]'
})
export class FreshIndicatorDirective implements OnInit {
  private readonly maxNumberOfDaysMs = 1000 * 60 * 60 * 24 * 14;
  @Input() creationDate!: Date;

  @HostBinding('style.border') border!: string;

  ngOnInit(): void {
    this.changeBorder();
  }

  changeBorder() {
    const currentTime = (new Date()).getTime();
    const creationTime = this.creationDate.getTime();

    if (creationTime < currentTime && creationTime >= currentTime - this.maxNumberOfDaysMs) {
      this.border = '1px solid green';
    } else if (creationTime > currentTime) {
      this.border = '1px solid blue';
    }
  }
}
