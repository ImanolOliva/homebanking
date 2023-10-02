import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/model/UserRegister';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit{

  currentUser: any;
  form: FormGroup;

  
  constructor(private userService:UserService,private formBuilder:FormBuilder){}

  ngOnInit(){
    this.currentUser = this.userService.getFromLocalStorage();
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      salary: new FormControl('', Validators.requiredTrue)
    });
  }

  depositarDinero(){
    let userRegister = new UserRegister();
    userRegister.salary = this.form.get('salary').value;

    this.currentUser.salary = userRegister.salary;
    this.userService.getSalaryDeposit(this.currentUser).subscribe(
      {
        next:(data:UserRegister)=>{
          this.form.reset();
          console.log(data);
          localStorage.setItem('currentUser', JSON.stringify(data));
        },
        error:(err)=>{
          if(err.status == 400){
            alert("No posee saldo suficiente");
          }
        },
        complete() {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deposito realizado ',
            showConfirmButton: false,
            timer: 2500
          });
        },
      }
    )
  }



}
