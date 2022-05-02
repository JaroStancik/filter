import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilterAttribute',
})
export class SearchFilterAttributePipe implements PipeTransform {
  transform(items: Array<any>, filter: Array<any>): Array<any> {
    if (!items) return null;
    if (filter?.length === 0 || !filter) return items;

    let filteredItems = [];
    items.filter(function (item) {
      filter.forEach((el, index) => {
        Object.keys(el).find((key) => {
          if (item[key] === filter[index][key]) {
            // prevent saving duplicated filtered items
            if (!filteredItems.some((el) => el.id === item.id))
              filteredItems.push(item);
          }
        });
      });
    });

    return filteredItems;
  }
}
