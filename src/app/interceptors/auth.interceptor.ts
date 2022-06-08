import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, finalize, Observable, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private httpP:HttpClient ,private router : Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token_user")}`
      }
    });


    return next.handle(request).pipe(

      retry(2),

      //-------------------- catchError ------------------------
      catchError((error: HttpErrorResponse) => {
     
        if(error.status == 401){
            this.router.navigate(['login'])
        }

        return throwError(error);
      }),
      //--------------------------------------------------------







      //-------------------- finalize ------------------------
      finalize(() => {

      })
     //-------------------------------------------------------

    );

  }
}
