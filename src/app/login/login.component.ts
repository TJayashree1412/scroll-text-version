import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  private errorMessage;
  userName: string;
  loginFailure=false;
  isLoading :boolean =false;

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, public dataservice: LoginService) { }

  ngOnInit() {
    sessionStorage.clear();
  }

  async onSubmit() {
    this.isLoading = true;
    this.errorMessage='';
    let getdata = await this.dataservice.authenticate(this.loginForm.value.userName,this.loginForm.value.password);
    console.log("getdata:"+JSON.stringify(getdata));
    //if (getdata.isSuccess==="true")
    
     sessionStorage.setItem('loggeduser',this.loginForm.value.userName);
     sessionStorage.setItem('userdata',JSON.stringify(getdata));
     sessionStorage.setItem('isAuthenticated',"true");
     this.isLoading = false;
    this.router.navigate(['/privacyNotice']);
  
    this.errorMessage='Incorrect IntranetID or Password';
    this.loginFailure=true;
     return;
  }

  SignOut(){
    sessionStorage.clear();
  }
}


