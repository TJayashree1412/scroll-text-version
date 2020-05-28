import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.bx--header') headerClass = true;

 username:any;
  profilePic:any;
  Roles : any;
  currentNavId: any;
  navigation : any;

  constructor(private router:Router,private headerService:HeaderService ) {}

  ngOnInit() {
    this.headerService.profilePic.subscribe(profilePic => {this.profilePic = profilePic});
    this.headerService.username.subscribe(username => {this.username = username});
    this.headerService.navigation.subscribe(username => {this.navigation = username});
 
    let listofRoles = sessionStorage.getItem("userdata");
    let json = JSON.parse(listofRoles);
    this.Roles = json.actionEventList;
    // this.currentNavId = "home";
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

  onClickNavItem(event): void {
    if (!event.target.closest('a')) { return; }
    this.currentNavId = event.target.closest('ibm-sidenav-item').id;
  }

}
