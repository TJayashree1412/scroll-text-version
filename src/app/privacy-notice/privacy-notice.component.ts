import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrls: ['./privacy-notice.component.scss']
})
export class PrivacyNoticeComponent implements OnInit {
  
  
  constructor(private router:Router ) {}
  ngOnInit(): void {
  }

  privacyNotice(){
    
    sessionStorage.setItem("isNavigate","true");
    this.router.navigate(['/Home']);
  }
}