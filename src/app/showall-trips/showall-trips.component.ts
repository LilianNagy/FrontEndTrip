import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-showall-trips',
  templateUrl: './showall-trips.component.html',
  styleUrls: ['./showall-trips.component.css']
})
export class ShowallTripsComponent implements OnInit {

  newTrip:Trip={tripid:0,startTime:"",endTime:"",fromStation:"",toStation:""};
  constructor( private http:HttpClientModule , private tripservice:TripService){

  };

  ngOnInit(): void {
  }
  
  showalltrip(){

    this.tripservice.getalltrips().subscribe(data=>{
      console.log(data)})

  }

}
