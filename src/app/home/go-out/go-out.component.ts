import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/model/UserRegister';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-go-out',
  templateUrl: './go-out.component.html',
  styleUrls: ['./go-out.component.css']
})
export class GoOutComponent implements OnInit,OnDestroy{

  currentUser: UserRegister;
  
  constructor(private router:Router){}
  ngOnInit(): void {
    this.initializerMessage();
    
  }

  ngOnDestroy(): void {
    this.RemoveLocalStorage();
  }
  
  public RemoveLocalStorage(){
    localStorage.removeItem('currentUser');
  }

  public initializerMessage(){
    this.currentUser = this.getCurrentUserFromLocalStorage();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title:"Hasta pronto " + this.currentUser.userName,
      showConfirmButton: false,
      timer: 3500
    })

    this.router.navigate(['/login']);
  }
  
  public getCurrentUserFromLocalStorage(): UserRegister | null {
    //El localStorage y su getItem me va a ir a obtener el usuario Inicial
    //que yo estoy haciendo el SET en el RegisterComponent. El localStorage 
    //No le importan las barreras es como un dios que anda por todo el programa
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

}

