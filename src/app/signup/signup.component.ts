import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { AdminserviceService } from '../adminservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
  admin:Admin={username: "", email: "",password: ""}
  constructor(private http:HttpClientModule , private adminservice:AdminserviceService) { }

  ngOnInit(): void {
  }
  signup(){
    this.adminservice.register(this.admin).subscribe((data: any)=>{
      console.log(data)
    })

}
}
