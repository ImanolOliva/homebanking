import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Destinatarios } from 'src/app/model/Destinatarios';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {
  form: FormGroup;
  destinatarios: any[] = [];
  currentUser: any;


  constructor(private formBuilder:FormBuilder){ }


  ngOnInit(){
    this.createForm();
    this.currentUser = this.getFromLocalStorage();
  }

  agregarDestinatario() {
    this.destinatarios.push({
      cuenta: '',
      nombre: '',
      dinero: ''
    });
  }

  createForm(){
    this.form = this.formBuilder.group({
      numeroCuenta : new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      dineroTransferir: new FormControl('', Validators.required)
    })
  }

  getFromLocalStorage() {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

  transferencias(){
    let destinatario = new Destinatarios();

    destinatario.nombre = this.form.get('nombre').value;
    destinatario.numeroCuenta = this.form.get('numeroCuenta').value;
    destinatario.dineroTransferir = this.form.get('dineroTransferir').value;

    this.currentUser.salary = this.currentUser.salary - destinatario.dineroTransferir;
    




  }


}
