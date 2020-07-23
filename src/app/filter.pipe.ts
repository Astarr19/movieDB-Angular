import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], filter: String): any {
    if (!items || !filter) {
      return items;
    }
    // filters items array. Items which match and return true will be kept, false will be filtered out
    return items.filter(
      (item) => item.task.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }
}
