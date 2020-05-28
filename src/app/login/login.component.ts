import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
   errorMessage :String;
  userName: string;
  loginFailure=false;
  isLoading :boolean =false;
  isActive:boolean = false;
  overlay:boolean = false;

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, public dataservice: LoginService,private headerService:HeaderService) { }

  ngOnInit() {
    sessionStorage.clear();
  }

  async onSubmit() {
    this.isLoading = true;
    this.errorMessage='';
    this.isActive = true;
    this.overlay = true;
    this.loginFailure = false;
    let data = await this.dataservice.authenticate(this.loginForm.value.userName,this.loginForm.value.password);
    console.log("data:"+JSON.stringify(data));
    if (data.errorCode==0)
    {
     sessionStorage.setItem('loggeduser',this.loginForm.value.userName);
     sessionStorage.setItem('userdata',JSON.stringify(data));
     sessionStorage.setItem('isAuthenticated',"true");
     this.headerService.setLoggedInUserDetails();
     this.isLoading = false;
     this.isActive = false;
     this.overlay = false;
    this.router.navigate(['/privacyNotice']);
  }
  else{
    this.errorMessage='Either Email or password is wrong';
    this.loginFailure=true;
    sessionStorage.clear();
  }
     return;
  }

  SignOut(){
    sessionStorage.clear();
    this.headerService.removeLoggedInUserDetails();
  }
}


