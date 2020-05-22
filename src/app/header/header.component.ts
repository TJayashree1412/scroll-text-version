import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.bx--header') headerClass = true;

 username:string;
  profilePic:any;
  Roles : any;

  constructor(private router:Router ) {}

  ngOnInit() {
   let user = sessionStorage.getItem("loggeduser");
    this.username = user;
    this.profilePic="https://w3-services1.w3-969.ibm.com/myw3/unified-profile-photo/v1/image/"+sessionStorage.getItem("loggeduser");
    let listofRoles = sessionStorage.getItem("userdata");
    let json = JSON.parse(listofRoles);
    this.Roles = json.actionEventList;
  }
  SignOut(){
    sessionStorage.clear();
    this.router.navigate(['/Login']);
  }

  isUserAuthenticated(): boolean{
    if (sessionStorage.getItem("isAuthenticated") === "true") {      
      return true;      
      } else{
        return false;
      }
  }

  isNavigated(): boolean{
    if (sessionStorage.getItem("isNavigate") === "true") {      
      return true;      
      } else{
        return false;
      }
  }


}
