import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/model/UserRegister';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{

  public currentUser: UserRegister;
  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.currentUser = this.userService.getFromLocalStorage(); 
    this.currentUser.userName;
    console.log("estoy en el balance " + this.currentUser.salary.valueOf());   
  }

  


  

}
