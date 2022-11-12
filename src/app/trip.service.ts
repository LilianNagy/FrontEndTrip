import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(
private http:HttpClient

  ) { }
 createtrip(newtrip:Trip):Observable<Object>{

  return this.http.post<Trip>('http://localhost:8080/api/addTrip',newtrip)

 }
 
 getalltrips():Observable<Trip[]>{
  return this.http.get<Trip[]>('http://localhost:8080/api/getTrip')

 }
 updatetrip(updatedtrip:Trip,tripid:number):Observable< Object>{

 return this.http.put<Trip>('http://localhost:8080/api/updateTrip/' +tripid+"?NewFromStation="+updatedtrip.fromStation,updatedtrip)
 }
 
 deletetrip(tripid:number):Observable< Object>{

  return this.http.delete<Trip>('http://localhost:8080/api/deleteTrip/'+tripid)
  }



}
