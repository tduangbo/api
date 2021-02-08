import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export  interface Config{
  heroesUrl: string,
  textfile: string,
  cards: any[],

}

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  configurl = 'https://api.magicthegathering.io/v1/cards';


  constructor(private httpClient: HttpClient) { }
  getConfig(){
    return this.httpClient.get<Config>(this.configurl)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    /*
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    */
    return throwError(
      'Something bad happened; please try again later.');
      
  }
  
  
}
