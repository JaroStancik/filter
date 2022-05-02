import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-attribute-filter',
  templateUrl: './attribute-filter.component.html',
  styleUrls: ['./attribute-filter.component.scss'],
})
export class AttributeFilterComponent implements OnInit {
  @Input() attributeFilterId = '';

  constructor(private filterService: FilterService) {}

  // filterOptions = ['price', 'numberOfItems', 'timestamp', 'id'];
  filterOptions = ['price', 'numberOfItems', 'id'];
  selectedAttribute: string;
  attributeValue: string;

  ngOnInit(): void {}

  setAttributeFilter() {
    if (this.selectedAttribute && this.attributeValue) {
      let filter = { [this.selectedAttribute]: this.attributeValue };
      this.filterService.addFilter(filter);
    }
  }

  onAttributeKeyChange(attributeKey: string): void {
    this.selectedAttribute = attributeKey;
  }

  onAttributeValueChange(attributeValue: string): void {
    this.attributeValue = attributeValue;
  }
}
