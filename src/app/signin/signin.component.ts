import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../Admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  admin:Admin={username: "", email: "",password: ""}
  constructor(private http:HttpClientModule , private adminservice:AdminserviceService) { }

  ngOnInit(): void {
  }
  login(){
    this.adminservice.login(this.admin).subscribe((data: any)=>{
      console.log(data)
    })

}
}
