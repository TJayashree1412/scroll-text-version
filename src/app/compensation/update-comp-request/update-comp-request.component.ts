import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-comp-request',
  templateUrl: './update-comp-request.component.html',
  styleUrls: ['./update-comp-request.component.scss']
})
export class UpdateCompRequestComponent implements OnInit {
  items:any;
  workLocationRadio:any;
  visaStatusRadio:any;
  emplt89Radio:any;
  empData:{}=null;

  constructor(private router: Router) { 
    console.log("Constructor() called...!")
    console.log(this.router.getCurrentNavigation().extras.state);
    this.empData = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.items = [
      { content: "one", id: 0 },
      { content: "two", id: 1 },
      { content: "three", id: 2 },
      { content: "four", id: 3 }
    ];
    this.workLocationRadio = [
      { location: "IBM" },
			{ location: "Client" },
    ];
    this.visaStatusRadio = [
      { location: "Applying for Visa" },
			{ location: "Currently Holding Visa" },
    ];
    this.emplt89Radio = [
      { location: "Yes" },
			{ location: "No" },
    ];
    this.getEmployeeDetails();
  }

  UpdateEmpForm = new FormGroup({
    // empserial:new FormControl(null,[Validators.required]),
    // empvisatype: new FormControl(),
    // us89daysstay:new FormControl('Yes')
    pmpSeatID:new FormControl(),
    empVisa:new FormControl(),
    compType1:new FormControl(),
    visaStatus:new FormControl(),
    emplt89:new FormControl(),
    bandLevel:new FormControl(null,[Validators.required]),
    currJobFamily:new FormControl(null,[Validators.required]),
    ibmGlobalPmr:new FormControl(null,[Validators.required]),

    empSerial:new FormControl(),
    empHomeCountry:new FormControl(),
    firstName:new FormControl(),
    middleName:new FormControl(),
    lastName:new FormControl(),
    ppFirstName:new FormControl(),
    ppMiddleName:new FormControl(),
    ppLastName:new FormControl(),
    empEmailId:new FormControl(null,[Validators.required]),
    jobTitle:new FormControl(null,[Validators.required]),
    eduTraining:new FormControl(null,[Validators.required]),
    itExeperience:new FormControl(null,[Validators.required]),
    yearsOfExp:new FormControl(0,[Validators.required]),
    monthsOfExp:new FormControl(0,[Validators.required]),
    itprojSkill1:new FormControl(),
    itprojSkill2:new FormControl(),
    itprojSkill3:new FormControl(),
    itprojSkill4:new FormControl(),
    itprojSkill5:new FormControl(),
    bussUnit:new FormControl(null,[Validators.required]),
    mgrName:new FormControl(null,[Validators.required]),
    mgrEmail:new FormControl(),
    usPemName:new FormControl(null,[Validators.required]),
    usPemEmail:new FormControl(null,[Validators.required]),
    reqPMName:new FormControl(null,[Validators.required]),
    reqPMEmail:new FormControl(null,[Validators.required]),
    usAccntMgr:new FormControl(null,[Validators.required]),
    usAccntprpdProjEmail:new FormControl(null,[Validators.required]),
    prosdStartDate:new FormControl(),
    prosdEndDate:new FormControl(),
    ancptDuration:new FormControl(null,[Validators.required]),
    prpdRole:new FormControl(null,[Validators.required]),
    prpdJobTitle:new FormControl(null,[Validators.required]),
    growthPlatform:new FormControl(null,[Validators.required]),
    clientName:new FormControl(null,[Validators.required]),
    ustadd1:new FormControl(null,[Validators.required]),
    ustadd2:new FormControl(),
    workLocation:new FormControl(null,[Validators.required]),
    ustzip:new FormControl(null,[Validators.required]),
    uststate:new FormControl(null,[Validators.required]),
    ustcounty:new FormControl(null,[Validators.required]),
    ustcity:new FormControl(null,[Validators.required]),
    usWorkLocCampus:new FormControl(null,[Validators.required]),
    ustphone:new FormControl(),
    uswadd1:new FormControl(null,[Validators.required]),
    uswadd2:new FormControl(),
    uswzip:new FormControl(null,[Validators.required]),
    uswState:new FormControl(null,[Validators.required]),
    uswcity:new FormControl(null,[Validators.required]),
    uswphone:new FormControl(),
    inadd1:new FormControl(null,[Validators.required]),
    inadd2:new FormControl(),
    inzip:new FormControl(null,[Validators.required]),
    cwState:new FormControl(null,[Validators.required]),
    cwcity:new FormControl(null,[Validators.required]),
    cwcountry:new FormControl(null,[Validators.required]),
    inphone:new FormControl(),
    comment:new FormControl(),
    });

    // selected(selectedValue){
    //   console.log("selected(selectedValue): "+JSON.stringify(selectedValue));
    // }

    getEmployeeDetails(){
      console.log('getEmployeeDetails() Starts---- ');
      console.log('getEmployeeDetails():--- '+JSON.stringify(this.empData))
    }

  onSubmit(){
    console.log("Update comp onSubmit() Starts");
    console.log(JSON.stringify(this.UpdateEmpForm.value));
  }

}
