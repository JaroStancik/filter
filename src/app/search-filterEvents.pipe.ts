import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterEvents',
})
export class SearchFilterEventsPipe implements PipeTransform {
  transform(items: any, filter?: string): number {
    if (!items) return null;
    if (!filter) return items;

    return items.filter(function (data) {
      if (data.id === filter) return data.id;
    });
  }
}
