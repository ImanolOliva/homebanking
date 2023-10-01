import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/model/UserRegister';
import { UsuarioTarjeta } from 'src/app/model/UsuarioTarjeta';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit{


  currentUser:any;
  usuarioTarjeta: any = {}; //Inicializo el objeto vacio para no tener problemas de undefined 


  constructor(private userService:UserService){}

  ngOnInit(){
    this.currentUser = this.userService.getFromLocalStorage();    
    this.getTarjeta();
  }


  

  getTarjeta(){
   
    this.usuarioTarjeta.nombre = this.currentUser.userName;
    this.usuarioTarjeta.saldo = this.currentUser.salary;

    this.userService.getTarjeta(this.usuarioTarjeta).subscribe(
      {
        next:(value:UsuarioTarjeta) => {
           this.usuarioTarjeta.nombre = value.nombre;
           this.usuarioTarjeta.saldo = value.saldo;
           this.usuarioTarjeta.fechaVencimiento = value.fechaVencimiento;
           this.usuarioTarjeta.nroTarjeta = value.nroTarjeta;
        }, error(err) {
          console.log("capturando el error",err);
        },
        complete(){
          console.log("Este es el current user", this.currentUser);
          console.log("Estoy en el complete");
        }
      }
    )
  }
}
