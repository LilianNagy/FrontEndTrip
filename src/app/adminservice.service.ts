import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

 register(admin:Admin):Observable<Object>{

    return this.http.post<Admin>('http://localhost:8080/api/register',admin)
  
   }
   login(admin:Admin):Observable<Object>{

    return this.http.post<Admin>('http://localhost:8080/api/login',admin)
  
   }
}
