import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public vlaue0:string ;
  constructor(private myserv:MyserviceService,private router : Router) { }

  ngOnInit(): void {
       this.myserv.checkAuthorizeUser().then((res:any)=>{
         console.log("check Authorize User" , res)

         if(res.responseCode == 0)  {this.router.navigate(['login'])
        
        }else{
           

          this.myserv.getValueUser().then((ress : any) => {
            this.vlaue0 = ress.responseMessage
            console.log(ress)
         });

          
         }


   
       

    })

  }

}
