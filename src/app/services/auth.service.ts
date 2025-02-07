import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string):void {
    console.log("Setting token:", token);
    localStorage.setItem('token',token);
  }

  

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken()!==null;
  }

  logout(){
    localStorage.removeItem('token');
    inject(Router).navigate(['/']);
  }
  login({username,password}:any): Observable<any>{
    if(username === 'rb.radhakant26@gmail.com' && password === 'radha@123'){
      this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
      return of({name: 'Admin', email: 'rb.radhakant26@gmail.com'});

    }

    return throwError(() => new Error('Invalid Credebntials'));


  }
}


