import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-comp-request',
  templateUrl: './update-comp-request.component.html',
  styleUrls: ['./update-comp-request.component.scss']
})
export class UpdateCompRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  UpdateEmpForm = new FormGroup({
    // empserial:new FormControl(null,[Validators.required]),
    // empvisatype: new FormControl(),
    // us89daysstay:new FormControl('Yes')
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
    comment:new FormControl(),
    mgrName:new FormControl(null,[Validators.required]),
    
    });

  onSubmit(){
    console.log("Update comp onSubmit() Starts");
    console.log(JSON.stringify(this.UpdateEmpForm.value));
  }

}
