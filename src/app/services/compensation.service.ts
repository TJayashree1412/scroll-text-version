import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { CompensationDTO } from '../ts-classes/compensationDTOs/CompensationDTO';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { CompensationDetailsDTO } from '../ts-classes/compensationDTOs/CompensationDetailsDTO';
import { HCAMDBUser } from '../ts-classes/HCAMDBUser';
@Injectable({
  providedIn: 'root'
})
export class CompensationService {

  private url: string;
  response: any;
  private errorStatus: string;
  responseList: any;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/USHCAM';
  }

   getEmployeeDetails(createComp: any) {
    return this.httpClient.post(this.url + '/getEmployeeDetails', createComp, {
      observe: 'response'
    })
    .pipe(catchError(this.handleError));
  }

  createCompensation(): Observable <HttpResponse<CompensationDTO>> {
    return this.httpClient.get<CompensationDTO>(this.url + '/createCompReq', {
      observe: 'response'
    });
  }

  getCompensationList(pemUser: HCAMDBUser) {
    return this.httpClient.post(this.url + '/compList', pemUser, {observe: 'response'})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured :', error.error.message);
    } else {
      this.errorStatus = `${error.status}`;
    }
    return throwError(this.errorStatus);
  }
}
