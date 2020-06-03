import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompensationRoutingModule } from './compensation-routing.module';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component';
import { AccordionModule, ButtonModule } from 'carbon-components-angular';
import {Table, TableModule, TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
import { EditCompRequestComponent } from './edit-comp-request/edit-comp-request.component';

@NgModule({
  declarations: [CompHomeComponent, MyCompRequestsComponent, EditCompRequestComponent],
  imports: [
    CommonModule,
    CompensationRoutingModule,
    AccordionModule,
    TableModule,
    ButtonModule,
  ]
})
export class CompensationModule { }
