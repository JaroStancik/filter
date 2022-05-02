import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { SearchFilterEventsPipe } from './search-filterEvents.pipe';
import { SearchFilterAttributePipe } from './attribute-filter/search-filterAttribute.pipe';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AttributeFilterComponent } from './attribute-filter/attribute-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterService } from './attribute-filter/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterEventsPipe,
    SearchFilterAttributePipe,
    AttributeFilterComponent,
  ],
  imports: [BrowserModule, FormsModule, NgSelectModule, ReactiveFormsModule],
  providers: [FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
