import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isNavigated(): boolean{
    if (sessionStorage.getItem("isNavigate") === "true") {      
      return true;      
      } else{
        return false;
      }
  }


}
