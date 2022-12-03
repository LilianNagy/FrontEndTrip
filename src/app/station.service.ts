import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Station } from './station';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(
    private http:HttpClient
    
      ) { }
     createstation(newStation:Station):Observable<Object>{
    
      return this.http.post<Station>(`${environment.apiUrl}/api/addStation`,newStation)
    
     }
     getallstation():Observable<Station[]>{
      return this.http.get<Station[]>(`${environment.apiUrl}/api/getStation`)
    
     }
     updatestation(updatedstation:Station,stationid:number):Observable< Object>{
    
     return this.http.put<Station>(`${environment.apiUrl}/api/updateStation/`+stationid+"?name="+updatedstation.name,updatedstation)
     }
     
     deleteStation(id:number):Observable< Object>{
    
     return this.http.delete<Station>(`${environment.apiUrl}/api/deleteStation/`+id)
      }
  
}
