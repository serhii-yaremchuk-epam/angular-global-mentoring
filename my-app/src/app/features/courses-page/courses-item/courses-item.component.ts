import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {Course} from '../../../shared/models/course.model';

@Component({
  selector: 'cp-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesItemComponent {
  @Input() course!: Course;

  @Output() delete = new EventEmitter<Course>();

  onDelete() {
    this.delete.emit(this.course);
  }
}
