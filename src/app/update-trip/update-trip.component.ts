import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-create-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
  newtrip:Trip={tripid:0,startTime:"",endTime:"",fromStation:"",toStation:""};
  constructor( private http:HttpClientModule , private tripservice:TripService) { }

  ngOnInit(): void {
  }

  updatetrip(){
    this.tripservice.updatetrip(this.newtrip , this.newtrip.tripid).subscribe(data=>{
      console.log(data)})

    }

}
