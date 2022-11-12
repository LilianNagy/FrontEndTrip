import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { HttpClientModule } from '@angular/common/http';
import { StationService } from '../station.service';

@Component({
  selector: 'app-delete-station',
  templateUrl: './delete-station.component.html',
  styleUrls: ['./delete-station.component.css']
})
export class DeleteStationComponent implements OnInit {

 
 
  newStation:Station={id:0 ,name:""};
  constructor( private http:HttpClientModule , private stationservice:StationService){

  };

  ngOnInit(): void {
  }
 deletestation(){
    this.stationservice.deleteStation(this.newStation.id).subscribe(data=>{
      console.log(data)})

    }
    
  }

