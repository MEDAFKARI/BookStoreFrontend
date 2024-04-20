import { Injectable } from '@angular/core';
import {
 HttpRequest,
 HttpHandler,
 HttpEvent,
 HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, mergeMap, throwError, of } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request Headers:', request.headers.keys().map(key => `${key}: ${request.headers.get(key)}`));
      return this.getToken().pipe(
        mergeMap((token) => {
          request = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
          });
          return next.handle(request).pipe(
            catchError((error: any) => {
              if (error && error.status) {
                if (error.status === 401) {
                  console.log("Error: Unauthorized");
                }
              } else {
                return throwError(error);
              }
              return of(error);
            })
          );
        }
      )
      );
   }
  
   getToken(): Observable<string> {
      const token = localStorage.getItem('token');
      return of(token ? token : "");
   }
}
