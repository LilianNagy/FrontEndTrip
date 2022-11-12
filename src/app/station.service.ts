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
     getallstation():Observable<Station[]>{
      return this.http.get<Station[]>('http://localhost:8080/api/getStation')
    
     }
     updatestation(updatedstation:Station,stationid:number):Observable< Object>{
    
     return this.http.put<Station>('http://localhost:8080/api/updateStation/'+stationid+"?name="+updatedstation.name,updatedstation)
     }
     
     deleteStation(id:number):Observable< Object>{
    
     return this.http.delete<Station>('http://localhost:8080/api/deleteStation/'+id)
      }
  
}
