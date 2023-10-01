import { Component, OnInit } from '@angular/core';
import { UsuarioTarjeta } from 'src/app/model/UsuarioTarjeta';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit{


  currentUser:UsuarioTarjeta;

  constructor(private userService:UserService){}

  ngOnInit(){
    this.currentUser = this.userService.getFromLocalStorage();
  }

  getTarjeta(){
    let usuarioTarjeta = new UsuarioTarjeta();
    this.userService.getTarjeta(this.currentUser).subscribe(
      {
        next:(value:UsuarioTarjeta) => {
            usuarioTarjeta.nombre = value.nombre;
            usuarioTarjeta.salario = value.salario;
            usuarioTarjeta.fechaVencimiento = value.fechaVencimiento;
            usuarioTarjeta.nroTarjeta = value.nroTarjeta;
        }, error(err) {
          console.log("capturando el error",err);
        },
        complete(){
          console.log("Estoy en el complete");
        }
      }
    )
  }
}
