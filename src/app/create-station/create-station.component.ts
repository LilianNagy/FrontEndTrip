import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { HttpClientModule } from '@angular/common/http';
import { StationService } from '../station.service';

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrls: ['./create-station.component.css']
})
export class CreateStationComponent implements OnInit {

  newStation:Station={ id:0, name:""};
  constructor( private http:HttpClientModule , private stationservice:StationService){

  };

  ngOnInit(): void {
  }
  createnewstation(){
    this.stationservice.createstation(this.newStation).subscribe(data=>{
      console.log(data)})

    }
  }
  
