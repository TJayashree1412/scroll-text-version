import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { HomeComponent } from './home/home.component';
import { AuthenitcationService } from './services/authenticationService';


const routes: Routes = [
  { path: '', component: LoginComponent },
{ path: 'Login', component: LoginComponent },

{ path: 'privacyNotice', component: PrivacyNoticeComponent, canActivate: [AuthenitcationService]},
{ path: 'Home', component: HomeComponent, canActivate: [AuthenitcationService] },
{ path: 'comp',
  loadChildren: () => import('./compensation/compensation.module').then(m => m.CompensationModule),
  canActivate: [AuthenitcationService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
