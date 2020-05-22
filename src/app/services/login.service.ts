import { Injectable, APP_ID } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private actionUrl: string;
  response: any;
  UserId: String;
  Pwd: String;

  constructor(private http: HttpClient) {
    this.actionUrl = 'http://localhost:8080/USHCAM';
  }


  async authenticate(userID: string, password: string): Promise<any> {
    console.log("authenticate:"+userID + "password:"+password);
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
          console.log("POST Request is successful ", data);
          //this.response = data.json();
          this.response = JSON.parse(data);
          console.log("POST Request is successful ", JSON.parse(data));
        },
        error => {
          console.log("Error in authenticate", error);
          status = false;
        }
      );
    return this.response;
  }
}
