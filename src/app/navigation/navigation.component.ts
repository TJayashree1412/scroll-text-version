import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  Roles :any;
  constructor() { }

  ngOnInit() {
    
    let listofRoles = sessionStorage.getItem("userdata");
    let json = JSON.parse(listofRoles);
    this.Roles = json.actionEventList;
  }
}
