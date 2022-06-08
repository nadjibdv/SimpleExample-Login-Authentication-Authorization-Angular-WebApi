import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private myserv:MyserviceService) { }

  ngOnInit(): void {
  }

  public checkLogin():boolean{
    if(localStorage.getItem("token_user") == null || localStorage.getItem("token_user") == "" ){
      return false
    }else{
      return true
    }
  }


  public clickLogOut(){
    
    localStorage.removeItem("token_user")
    localStorage.removeItem("data_user")
  
    this.myserv.checkAuthorizeUser()
  }

}
