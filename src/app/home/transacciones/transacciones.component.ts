import { Component } from '@angular/core';
import { Movimientos } from 'src/app/model/Movimientos';
import { UserRegister } from 'src/app/model/UserRegister';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent {

  constructor(private userService:UserService){}

  page = 1;
  pageSize = 6;
  transacciones:Movimientos [] = [];
  currentUser: UserRegister;

  ngOnInit() {
    this.currentUser = this.userService.getFromLocalStorage();
    this.getMovimientos();
  }
  

  getMovimientos(){
    this.userService.getMovimientos(this.currentUser).subscribe(
      {
        next:(data: Movimientos[] = []) => {
          this.transacciones = data; // Asigna los datos a la propiedad movimientos
        
        },
        error:(err)=>  {
          console.log(err);

        },
      }
    )
  }
}
