import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  newtrip:Trip={tripid:0,startTime:"",endTime:"",fromStation:"",toStation:""};
  constructor( private http:HttpClientModule , private tripservice:TripService) { }

  ngOnInit(): void {
  }
  deletetrip(){
    this.tripservice.deletetrip(this.newtrip.tripid).subscribe(data=>{
      console.log(data)})

    }
}
