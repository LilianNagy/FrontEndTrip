import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { HttpClientModule } from '@angular/common/http';
import { StationService } from '../station.service';
@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {
 
  
  newStation:Station={ id:0, name:""};
  constructor( private http:HttpClientModule , private stationservice:StationService){

  };

  ngOnInit(): void {
  }
  updatestation(){
    this.stationservice.updatestation(this.newStation , this.newStation.id).subscribe(data=>{
      console.log(data)})

    }
}
