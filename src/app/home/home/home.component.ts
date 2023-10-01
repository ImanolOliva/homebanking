import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private route:ActivatedRoute,private userService:UserService)
  {

  }

  public currentUser;

  ngOnInit(): void {
    this.currentUser = this.userService.getFromLocalStorage();
    this.userService.getMenuItems();
   }
 

 
   isSalaryPage(): boolean {
     /** Con esto explicito que si el path no es salario, se salga */
     return this.route.snapshot.routeConfig?.path === 'salary';
   }
   isWitdhrawalPage(): boolean{
         /** Con esto explicito que si el path no es withdrawal, se salga */
     return this.route.snapshot.routeConfig?.path === 'withdrawal'
   }
    /**Si el path no es transfers */
   isTransfers(): boolean{
     return this.route.snapshot.routeConfig?.path === 'transfers'
 
   }
}

