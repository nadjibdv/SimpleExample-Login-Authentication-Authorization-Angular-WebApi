import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public loginS:boolean = false;
  
  constructor(private httpP:HttpClient ,private router : Router) { }

  public url00:string ="https://localhost:44377/api/";


  public loginUser(usernam_g:string,email_g:string,password_g:string){
    const headers = {'content-type': 'application/json'} //body,{'headers' : headers}

    const body = JSON.stringify({
      user_ID: 0,
      user_FirstName: "",
      user_LastName: "",
      user_Email: email_g,
      user_UserName: usernam_g,
      user_Password: password_g,
      user_Role: ""
    });


    return this.httpP.post(this.url00 + 'user/login' , body , {'headers' : headers}).toPromise()
  }


  public checkAuthorizeUser(){
    const headers = {'content-type': 'application/json'} //body,{'headers' : headers}

    const body = JSON.stringify({
      user_ID: 0,
      user_FirstName: "null",
      user_LastName: "null",
      user_Email: "null",
      user_UserName: "null",
      user_Password: "null",
      user_Role: "null"
    });


    return this.httpP.post(this.url00 + 'user/check' , body , {'headers' : headers}).toPromise()
  }



  public getValueUser(){
  
    return this.httpP.get(this.url00 + 'user' ).toPromise()
  }

}
