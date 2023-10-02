import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/model/UserRegister';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  form: FormGroup;
  cbuValido: boolean = false;
  currentUser: any;

  ngOnInit(): void {
    this.currentUser = this.userService.getFromLocalStorage();
  }

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      cbu: ['', [Validators.required, this.validarCBU]],
      dinero: ['', [Validators.required]],
    });
    this.form.get('cbu').valueChanges.subscribe((value) => {
      this.cbuValido = this.form.get('cbu').valid;
    });
  }

  validarCBU(control) {
    const cbu = control.value;
    if (cbu && /^\d{16}$/.test(cbu)) {
      return null; 
    } else {
      return { cbuInvalido: true };
    }
  }
  enviarDinero() {

    const dinero = this.form.get('dinero').value;
    const cbu = this.form.get('cbu').value;
    const email = this.currentUser.email;



    if (dinero < this.currentUser.salary) {
      this.currentUser.salary = this.currentUser.salary - dinero;

      this.userService.transferencia(dinero, cbu, email).subscribe(
        {
          next: (value: UserRegister) => {
            this.currentUser.salary = value.salary;

            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            console.log(JSON.stringify(this.currentUser));
            this.form.reset();
          },
          error: (err) => {
            console.log(err);

          },
          complete() {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Operacion realizada',
            });
          },
        }
      )
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No posee saldo suficiente',
      });
    }
  }
}




