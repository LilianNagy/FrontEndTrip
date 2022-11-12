import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Station } from './station';
@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(
    private http:HttpClient
    
      ) { }
     createstation(newStation:Station):Observable<Object>{
    
      return this.http.post<Station>('http://localhost:8080/api/addStation',newStation)
    
     }
     getalltrips():Observable<Station[]>{
      return this.http.get<Station[]>('http://localhost:8080/api/getStation')
    
     }
     updatetrip(updatedstation:Station,stationid:number):Observable< Object>{
    
     return this.http.put<Station>(`http://localhost:8080/api/updateStation{stationId}/${stationid}`,updatedstation)
     }
     
     deletetrip(stationid:number):Observable< Object>{
    
     return this.http.delete<Station>(`http://localhost:8080/api/deleteStation{stationId}/${stationid}`)
      }
  
}
