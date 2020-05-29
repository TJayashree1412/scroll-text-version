import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompensationRoutingModule } from './compensation-routing.module';
import { AccordionModule, Table, TableModule, TableItem, TableHeaderItem, NFormsModule, SearchModule, ButtonModule, DialogModule } from 'carbon-components-angular';
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component';


@NgModule({
  declarations: [MyCompRequestsComponent],
  imports: [
    CommonModule,
    CompensationRoutingModule,
    AccordionModule,
    // Table,
    // TableModule,
    // TableItem,
    // TableHeaderItem,
    // NFormsModule,
    // DialogModule,
    // SearchModule,
    // ButtonModule
  ],
  exports: [MyCompRequestsComponent]
})
export class CompensationModule { }
