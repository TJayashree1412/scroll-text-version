import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { HomeComponent } from './home/home.component';
import {CompensationhomeComponent} from './compensation/compensationhome/compensationhome.component';


const routes: Routes = [ 
  { path: '', component: LoginComponent },
{ path: 'Login', component: LoginComponent },
{ path: 'privacyNotice',component: PrivacyNoticeComponent},
{ path: 'Home', component: HomeComponent  },
{ path: 'compHome', component: CompensationhomeComponent  },
{
  path: 'comp',
  loadChildren: () => import('./compensation/compensation.module').then(m => m.CompensationModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
