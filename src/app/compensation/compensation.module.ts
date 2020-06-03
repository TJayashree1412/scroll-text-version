import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompensationRoutingModule } from './compensation-routing.module';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component';
import { UIShellModule,GridModule, ListModule, TabsModule, TilesModule, InputModule, ButtonModule, ContentSwitcherModule, SideNavModule, RadioModule, CheckboxModule, ToggleModule, DropdownModule, FileUploaderModule, LoadingModule, DatePickerModule, ModalModule, PaginationModule, AccordionModule, SelectModule } from 'carbon-components-angular';
import {Table, TableModule, TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCompRequestComponent } from './edit-comp-request/edit-comp-request.component';
import { RaiseCompRequestComponent } from './raise-comp-request/raise-comp-request.component';
@NgModule({
  declarations: [CompHomeComponent, MyCompRequestsComponent, EditCompRequestComponent, RaiseCompRequestComponent],
  imports: [
    CommonModule,
    CompensationRoutingModule,
    UIShellModule,
    GridModule,
    ListModule,
    TabsModule,
    TilesModule,
    InputModule,
    ButtonModule,
    ContentSwitcherModule,
    SideNavModule,
    RadioModule,
    CheckboxModule,
    ToggleModule,
    DropdownModule,
    FileUploaderModule,
    LoadingModule,
    DatePickerModule,
    ModalModule,
    TableModule,
    PaginationModule,
    AccordionModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class CompensationModule { }
