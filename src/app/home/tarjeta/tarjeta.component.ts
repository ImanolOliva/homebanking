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
  usuarioTarjeta: UsuarioTarjeta[] = [] //Inicializo el objeto vacio para no tener problemas de undefined 


  constructor(private userService:UserService){}

  ngOnInit(){
    this.currentUser = this.userService.getFromLocalStorage();    
    this.getTarjeta();
  }

  getTarjeta(){
   let usuarioTarjeta = new UsuarioTarjeta();

   usuarioTarjeta.nombre = this.currentUser.userName;
   usuarioTarjeta.saldo = this.currentUser.salary;
   
    this.userService.getTarjeta(usuarioTarjeta).subscribe(
      {
        next:(usuarioTarjeta:UsuarioTarjeta[]) => {
            this.usuarioTarjeta = usuarioTarjeta;
            console.log(usuarioTarjeta);

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
