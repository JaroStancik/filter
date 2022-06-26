import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

import { FilterService } from './attribute-filter/filter.service';

import { AttributeFilterComponent } from './attribute-filter/attribute-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedEventId: string;
  selectedAttributeFilter = [];
  selectedEventFilter: string;
  componentRef: any;

  constructor(
    private filterService: FilterService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // create component factory
    const dynamicComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        AttributeFilterComponent
      );
    // add component to the view
    this.componentRef = this.container.createComponent(dynamicComponentFactory);
  }

  onSelectedEvent(id: string): void {
    this.selectedEventId = id;
  }

  onMultipleFilter(): void {
    this.filterService.clearFilter();
    // set attribute filter
    this.componentRef.instance.setAttributeFilter();
    // set event filter
    this.selectedEventFilter = this.selectedEventId;

    this.selectedAttributeFilter = this.filterService.getFilter();
  }

  // filterData = ['price', 'numberOfItems', 'timestamp', 'id'];
  filterData = ['price', 'numberOfItems', 'id'];

  localData = [
    {
      id: '0',
      events: 'python_script_event',
      price: '1',
      numberOfItems: '19',
      // timestamp: new Date(2022, 1, 1, 13, 30, 0),
    },
    {
      id: '2',
      events: 'python_script_event2',
      price: '2',
      numberOfItems: '2',
      // timestamp: new Date(2021, 10, 10, 13, 45, 0),
    },
    {
      id: '3',
      events: 'consent',
      price: '3',
      numberOfItems: '17',
      // timestamp: new Date(2021, 1, 1, 15, 30, 0),
    },
    {
      id: '4',
      events: 'python_script_event3',
      price: '4',
      numberOfItems: '16',
      // timestamp: new Date(2021, 10, 1, 13, 30, 0),
    },
    {
      id: '5',
      events: 'python_script_event4',
      price: '5',
      numberOfItems: '15',
      // timestamp: new Date(2021, 1, 10, 13, 30, 0),
    },
    {
      id: '6',
      events: 'desync_test1',
      price: '6',
      numberOfItems: '14',
      // timestamp: new Date(2021, 1, 1, 13, 30, 0),
    },
    {
      id: '7',
      events: 'desync_test2',
      price: '7',
      numberOfItems: '13',
      // timestamp: new Date(2021, 6, 27, 13, 30, 0),
    },
    {
      id: '8',
      events: 'session_start',
      price: '8',
      numberOfItems: '12',
      // timestamp: new Date(2020, 6, 27, 13, 30, 0),
    },
    {
      id: '9',
      events: 'session_end',
      price: '9',
      numberOfItems: '11',
      // timestamp: new Date(2017, 6, 27, 13, 30, 0),
    },
    {
      id: '10',
      events: 'page_visit',
      price: '10',
      numberOfItems: '10',
      // timestamp: new Date(2021, 8, 8, 13, 30, 0),
    },
    {
      id: '11',
      events: 'purchase',
      price: '11',
      numberOfItems: '9',
      // timestamp: new Date(2021, 6, 5, 13, 30, 0),
    },
    {
      id: '12',
      events: 'old_A3',
      price: '12',
      numberOfItems: '8',
      // timestamp: new Date(2021, 9, 27, 13, 30, 0),
    },
    {
      id: '13',
      events: 'B1',
      price: '13',
      numberOfItems: '7',
      // timestamp: new Date(2021, 3, 27, 13, 30, 0),
    },
    {
      id: '14',
      events: 'B2',
      price: '14',
      numberOfItems: '6',
      // timestamp: new Date(2022, 6, 27, 13, 30, 0),
    },
    {
      id: '15',
      events: 'B3',
      price: '15',
      numberOfItems: '5',
      // timestamp: new Date(2021, 6, 2, 13, 10, 0),
    },
    {
      id: '16',
      events: 'C2',
      price: '16',
      numberOfItems: '4',
      // timestamp: new Date(2021, 4, 4, 13, 30, 0),
    },
    {
      id: '17',
      events: 'C1',
      price: '17',
      numberOfItems: '3',
      // timestamp: new Date(2021, 9, 9, 13, 30, 0),
    },
    {
      id: '18',
      events: 'C3',
      price: '18',
      numberOfItems: '2',
      // timestamp: new Date(2021, 7, 27, 13, 30, 0).toDateString(),
    },
    {
      id: '19',
      events: 'view_item',
      price: '19',
      numberOfItems: '1',
      // timestamp: new Date(2021, 12, 12, 13, 30, 0),
    },
  ];
}
