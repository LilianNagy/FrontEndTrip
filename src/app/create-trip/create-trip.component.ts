import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {
  newtrip:Trip={tripid:0,startTime:"",endTime:"",fromStation:"",toStation:""};
  constructor( private http:HttpClientModule , private tripservice:TripService) { }

  ngOnInit(): void {
  }
   createnewtrip(){
this.tripservice.createtrip(this.newtrip).subscribe(data=>{
  console.log(data)
})

   }
}


;