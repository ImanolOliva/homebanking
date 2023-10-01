import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/model/UserRegister';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  form: any;
  public currentUser;
  public user:number;


  constructor(private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getFromLocalStorage();
    console.log(this.currentUser);
    this.createForm();
  }
  
  createForm() {
    this.form = this.formBuilder.group({
      salary: new FormControl('', Validators.requiredTrue)
    });
  }
  onEnterKey(): void {
      this.withdrawalOperation();
  }
  withdrawalOperation(){
    let userRegister = new UserRegister();
    userRegister.salary = this.form.get('salary').value;

    this.currentUser.salary = userRegister.salary;
    this.currentUser.id = userRegister.id;

    console.log("Usuario actual", this.currentUser );
    this.userService.getSalaryWinthdrewal(this.currentUser).subscribe(
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
            title: 'successfyle operation',
            showConfirmButton: false,
            timer: 2500
          });
        },
      }
    )
  }
}
