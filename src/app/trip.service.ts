import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './trip';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
private http:HttpClient

  ) { }
 createtrip(newtrip:Trip):Observable<Object>{

  return this.http.post<Trip>(`${environment.apiUrl}/api/addTrip`,newtrip)

 }
 
 getalltrips():Observable<Trip[]>{
  return this.http.get<Trip[]>(`${environment.apiUrl}/api/getTrip`)

 }
 updatetrip(updatedtrip:Trip,tripid:number):Observable< Object>{

 return this.http.put<Trip>(`${environment.apiUrl}/api/updateTrip/` +tripid+"?NewFromStation="+updatedtrip.fromStation,updatedtrip)
 }
 
 deletetrip(tripid:number):Observable< Object>{

  return this.http.delete<Trip>(`${environment.apiUrl}/api/deleteTrip/`+tripid)
  }



}
