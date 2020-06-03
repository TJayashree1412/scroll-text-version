import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component';
import { EditCompRequestComponent } from './edit-comp-request/edit-comp-request.component';
import { RaiseCompRequestComponent } from './raise-comp-request/raise-comp-request.component';
import {UpdateCompRequestComponent} from './update-comp-request/update-comp-request.component';
const routes: Routes = [
  {path: 'compHome',
  component: CompHomeComponent},
  {
    path: 'myCompRequests',
    component: MyCompRequestsComponent
  },
  {
    path: 'editCompRequest',
    component: EditCompRequestComponent
  },
  {
    path: 'raiseCompRequest',
    component: RaiseCompRequestComponent
  },
  { path: 'updateCompRequest',
  component: UpdateCompRequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompensationRoutingModule { }
