import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/model/UserRegister';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{

  public currentUser: UserRegister;
  constructor(){}

  ngOnInit(): void {
    this.currentUser = this.getCurrentUserFromLocalStorage(); 
    this.currentUser.userName;
    console.log("estoy en el balance " + this.currentUser.salary.valueOf());   
  }

  getCurrentUserFromLocalStorage(): UserRegister | null {
    //El localStorage y su getItem me va a ir a obtener el usuario Inicial
    //que yo estoy haciendo el SET en el RegisterComponent. El localStorage 
    //No le importan las barreras es como un dios que anda por todo el programa
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

}
