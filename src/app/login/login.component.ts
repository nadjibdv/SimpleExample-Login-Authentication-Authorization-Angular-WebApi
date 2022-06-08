import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myserv:MyserviceService,private router : Router) { }

  username = new FormControl('');
  password = new FormControl('');
  
  ngOnInit(): void {

    this.myserv.checkAuthorizeUser().then((res : any)=>{
      console.log("check Authorize User" , res)
    
      if(res.responseCode == 1)  this.router.navigate(['home'])
    });


  }

  public onClickLogIn(){
     this.myserv.loginUser(this.username.value , '' , this.password.value).then(
       (res:any)=>{
        if(res.responseCode == 1) {
        
        let token =res.token
         localStorage.setItem("token_user",token)
         
         localStorage.setItem("data_user",JSON.stringify(res["dataSet"]))
         //console.log(res["dataSet"])
         this.router.navigate(['home'])
        }

       }
     )
  
  }



}
