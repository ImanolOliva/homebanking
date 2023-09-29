import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private route:ActivatedRoute)
  {

  }

  public currentUser;

  ngOnInit(): void {
    this.currentUser = this.getCurrentUserFormLocalStorage();
   }
 
   getCurrentUserFormLocalStorage(){
     const userString = localStorage.getItem('currentUser');
     return userString ? JSON.parse(userString) : null;
 
   }
 
   isSalaryPage(): boolean {
     /** Con esto explicito que si el path no es salario, se salga */
     return this.route.snapshot.routeConfig?.path === 'salary';
   }
   isWitdhrawalPage(): boolean{
         /** Con esto explicito que si el path no es withdrawal, se salga */
     return this.route.snapshot.routeConfig?.path === 'withdrawal'
   }
   isContactUs(): boolean{
     /** Con esto explicito que si el path no es withdrawal, se salga */
   return this.route.snapshot.routeConfig?.path === 'contact-us'
   }
   isTransfers(): boolean{
     return this.route.snapshot.routeConfig?.path === 'transfers'
 
   }
   exit(): boolean{
     return this.route.snapshot.routeConfig?.path === 'exit'
 
   }
}

