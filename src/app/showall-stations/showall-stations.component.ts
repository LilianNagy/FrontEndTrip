import { Component, OnInit } from '@angular/core';
import { Station } from '../station';
import { HttpClientModule } from '@angular/common/http';
import { StationService } from '../station.service';

@Component({
  selector: 'app-showall-stations',
  templateUrl: './showall-stations.component.html',
  styleUrls: ['./showall-stations.component.css']
})
export class ShowallStationsComponent implements OnInit {

  allStation:Station[]=[];
  constructor( private http:HttpClientModule , private stationservice:StationService){

  };

  ngOnInit(): void {
    this.showallstation();
  }
  showallstation(){
    this.stationservice.getallstation().subscribe((data)=>{
      this.allStation=data})

      

    }
}
