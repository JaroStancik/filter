export class FilterService {
  attributeFilter = [];

  addFilter(filterObject: object) {
    this.attributeFilter.push(filterObject);
    console.log('Service created attribute filter:', this.attributeFilter);
  }

  clearFilter() {
    this.attributeFilter = [];
  }

  getFilter() {
    return this.attributeFilter;
  }
}
