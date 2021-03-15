import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

        intercept(request: HttpRequest<unknown>, next: HttpHandler):
            Observable<HttpEvent<unknown>> {
                if (request.url !== 'http://localhost:8000/login') {
                const token = localStorage.getItem('token');
                request = request.clone({
                setHeaders: {
                Authorization: 'bearer ' + token
                }
                });
                }
                return next.handle(request);
  }
}
