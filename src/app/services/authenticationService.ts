
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenitcationService implements CanActivate {
  constructor(private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : boolean  {
      if (sessionStorage.getItem("isAuthenticated") === "true") {      
        return true;      
        }      
        // navigate to login page as user is not authenticated      
     this.router.navigate(['/Login']);   
    return false;
  }
  

}