import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCompRequestsComponent } from './my-comp-requests/my-comp-requests.component';
import { CompensationhomeComponent } from './compensationhome/compensationhome.component';


const routes: Routes = [
  {path: 'myCompRequest',
  component: MyCompRequestsComponent
},
{
  path: 'compHome',
  component: CompensationhomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompensationRoutingModule { }
