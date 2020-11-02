import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(value: T[], ...args: [keyof T, boolean]): T[] {
    const [orderBy, asc] = args;
    let result = value.sort((a: T, b: T) => {
      if (a[orderBy] > b[orderBy]) {
        return -1;
      } else if (a[orderBy] < b[orderBy]) {
        return 1
      } else {
        return 0
      }
    });

    if (asc) {
      result = result.reverse();
    }

    return result;
  }

}
