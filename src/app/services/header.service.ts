import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private loginUsername = new BehaviorSubject<String>(null);
  username = this.loginUsername.asObservable()

  private isNavigate = new BehaviorSubject<any>(null);
  navigation = this.isNavigate.asObservable()

  private loggedInUserPhoto = new BehaviorSubject<any>(null);
  profilePic = this.loggedInUserPhoto.asObservable()
  navigate: any;

  constructor(private http : HttpClient) { 
    if(sessionStorage.getItem('isAuthenticated')=="true"){
      this.setLoggedInUserDetails();
    }
  }
  setLoggedInUserDetails(){
     this.loginUsername.next(sessionStorage.getItem("loggeduser"));
     this.loggedInUserPhoto.next("https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/"+sessionStorage.getItem("loggeduser"));
     this.isNavigate.next(sessionStorage.getItem("isNavigate"));
  }
  removeLoggedInUserDetails(){
    this.loginUsername.next(null);
    this.loggedInUserPhoto.next(null);
    this.isNavigate.next(false);
 }

}
