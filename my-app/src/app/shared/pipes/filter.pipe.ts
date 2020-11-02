import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(courses: Course[], ...args: [string]): Course[] {
    const [keyword] = args;
    if (!keyword) {
      return courses;
    }

    return courses.filter(course => course.title.toLowerCase().includes(keyword.toLowerCase()));
  }

}
