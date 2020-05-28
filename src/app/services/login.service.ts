import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private actionUrl: string;
  response: any;
  UserId: String;
  Pwd: String;
 

  constructor(private http: HttpClient,private router :Router) {
    this.actionUrl = 'http://localhost:8080/USHCAM';
  }


  async authenticate(userID: string, password: string): Promise<any> {
    let status: any = false;
    this.UserId = userID;
    this.Pwd = password;
    await this.http.post(this.actionUrl + "/login",
      {
        /*"username": this.encrUserId,
        "password": this.encrPwd*/
        "userName": userID,
        "password": password
      },{responseType: 'text'}
      
      ).toPromise()
      .then(
        data => {
          this.response = JSON.parse(data);
        },
        error => {
          console.log("Error in authenticate", error);
          status = false;
        }
      );
    return this.response;
  }

  logout(){
    sessionStorage.setItem("userdata",null);
    sessionStorage.setItem("isNavigate","false");
    sessionStorage.clear();
    
    this.router.navigate(['/Login']);   
  }
}
