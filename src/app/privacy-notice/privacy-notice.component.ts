import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.scss']
})
export class PrivacyNoticeComponent implements OnInit {
   navigate : any;
  
  constructor(private router:Router,private headerService:HeaderService) {}
  ngOnInit(): void {
   
  }

  privacyNotice(){
    
    sessionStorage.setItem("isNavigate","true");
    this.headerService.setLoggedInUserDetails();
    this.router.navigate(['/Home']);
  }
}