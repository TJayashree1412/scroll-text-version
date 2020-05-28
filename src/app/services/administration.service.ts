import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IBMIContact } from '../ts-classes/adminDTOs/IBMIContact';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ParameterBean } from '../ts-classes/adminDTOs/ParameterBean';

@Injectable({
  providedIn: 'root'
})
export class AdministratorServiceService {
  private actionUrl: string;
  response: any;
  private errorStatus: string;
  constructor(private http: HttpClient) {
    this.actionUrl = 'http://localhost:8080/USHCAM/admin/IBMIContacts/viewIBMIContact/';
  }
  getIBMIContactsList(): Observable <HttpResponse<IBMIContact[]>> {
    return this.http.get<IBMIContact[]>(
      this.actionUrl + '', { observe: 'response' });
  }

  editIBMIContact(IBMIid): Observable <HttpResponse<IBMIContact>> {
    return this.http.get<IBMIContact>(
      this.actionUrl + '' + IBMIid, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  getCountryMap(): Observable <HttpResponse<ParameterBean[]>> {
    return this.http.get<ParameterBean[]>(
      this.actionUrl + 'countryMap', { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  addIBMIContact(ibmiContact: any) {
    return this.http.post(this.actionUrl + 'addContact', ibmiContact, { observe: 'response' })
    .pipe(catchError(this.handleError));
  }

  updateIBMIContact(ibmiContact: any) {
    return this.http.post(this.actionUrl + 'updateContact', ibmiContact, { observe: 'response' })
    .pipe(catchError(this.handleError));
  }

  deleteIBMIContact(ibmiId: any) {
    return this.http.post(this.actionUrl + 'deleteContact', ibmiId, { observe: 'response' })
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
