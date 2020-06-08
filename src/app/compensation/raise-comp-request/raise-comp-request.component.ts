import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CompensationDTO } from 'src/app/ts-classes/compensationDTOs/CompensationDTO';
import { CompensationService } from 'src/app/services/compensation.service';
//import { CreateCompensation } from '../model/create-compensation';


@Component({
  selector: 'app-raise-comp-request',
  templateUrl: './raise-comp-request.component.html',
  styleUrls: ['./raise-comp-request.component.scss']
})
export class RaiseCompRequestComponent implements OnInit {
  createComp: CompensationDTO;
  statusCode : number;
  errorMessage : string;
  usstaymorethan89days=['Yes','No'];
  empserial: string;
  pmpseatid:string;
  flog:boolean=false;
  respData:{}=null;
  formSubmitAttempt: boolean;

  
  EmpInfoForm = new FormGroup({
  empserial:new FormControl(null,[Validators.required]),
  pmpseatid:new FormControl(null,[Validators.required]),
  empvisatype: new FormControl(null,[Validators.required]),
  comptypselect:new FormControl(null,[Validators.required]),
  countryselect:new FormControl(null,[Validators.required]),
  homeorHost:new FormControl(null,[Validators.required]),
  visaStatus:new FormControl(null,[Validators.required]),
  us89daysstay:new FormControl('Yes')
  
  });
  

  constructor(private fb: FormBuilder,private router: Router, public compService: CompensationService) {}
 
  ngOnInit(): void {
    this.empserial = '';
    this.pmpseatid ='';
    
    this.createCompensation();
    }
 
  async createCompensation(){
    console.log('Satya')
    this.compService.createCompensation().subscribe(
     data =>{
         this.createComp = data.body;
       },
      error => {
        this.statusCode = error.status;
        this.errorMessage = error.error;
       } 
     )
   
  }
 
   onSubmit(){
    this.formSubmitAttempt = true;
  
    console.log('Form submitted successfully');
    console.log(this.EmpInfoForm);
    
      this.createComp = new CompensationDTO();
      
      this.createComp.empserial = this.EmpInfoForm.value.empserial;
      this.createComp.pmpseatid = this.EmpInfoForm.value.pmpseatid;
      this.createComp.countryCode=this.EmpInfoForm.value.countryselect.key;
      this.createComp.compType=this.EmpInfoForm.value.comptypselect.key;
      this.createComp.visaTyp=this.EmpInfoForm.value.empvisatype.key;
   
      this.compService.getEmployeeDetails(this.createComp).subscribe(resp =>{
        this.statusCode = resp.status;
        console.log('Success', this.statusCode);
        console.log("Responce: "+JSON.stringify(resp));
        this.respData = resp.body;
        //this.createComp = resp.body
        this.changeFlog();
        //this.router.navigate(['/updateCompRequest']);
      });
    }
   isFieldValid(field: string) {
    return (!this.EmpInfoForm.get(field).valid && this.EmpInfoForm.get(field).touched) ||
      (this.EmpInfoForm.get(field).untouched && this.formSubmitAttempt);
  }
 

 /* getEmployeeDetails(){
    console.log('Benarji')
  }*/
  close(){
    this.EmpInfoForm.reset();
  this.formSubmitAttempt = false;
  }

   /*changeCompensationType(event:any) {
    this.EmpInfoForm.value.comptypselect=event.target.value;
  }*/
  changeCompensationType(e) {
    console.log(e.value)
    this.EmpInfoForm.value.comptypselect.setValue(e.target.value, {
      onlySelf: true
    })
  }
  
  changeHomeorHost(e) {
    console.log(e.value);
    /*this.EmpInfoForm.value.comptypselect.setValue(e.target.value, {
      onlySelf: true
    })*/
  }
  changeVisaStatus(e){
    console.log(e.value);
  }
  changeStayinUS(e){
    console.log(e.value);
  }

  changeFlog(){
    console.log('FLOG: '+this.flog);
    this.flog=!this.flog;
    console.log('FLOG: '+this.flog);
  }

  onClose(){
    this.router.navigate(['/comp/myCompRequests']);
  }
  
}
