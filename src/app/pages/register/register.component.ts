import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/model/UserRegister';
import { UserService} from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;


  constructor(private userService:UserService,private formBuilder:FormBuilder,
    private router:Router ){}
 
  ngOnInit(): void {
      this.form = this.formBuilder.group({
        userName: new FormControl('', [Validators.min(2), Validators.max(15)]),
        password: new FormControl('', [Validators.minLength(4), Validators.maxLength(4), Validators.required]),
        email: new FormControl( '', [Validators.email]),
      });
    }
    
  
  save(){
    let userRegister = new UserRegister();

    userRegister.userName = this.form.get('userName').value;
    userRegister.email = this.form.get('email').value;
    userRegister.password = this.form.get('password').value;

    this.userService.postUserRegister(userRegister).subscribe
    (
      {
        next:(data: UserRegister) =>{
          //Guardo en la localStorage la data del usuario
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.form.reset();
          this.router.navigate(['/login'])
        },
        error(err) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Esta email ya se encuentra registrado!',
              footer: '<a href="">Vuelve a registrarte </a>',
              
            })     
          console.log(err);
        },
        complete(){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registrado',
            showConfirmButton: false,
            timer: 2500
          })
        }
      }
    )
  }
//PASO A UN OBJETO EL USUARIO INGRESADO  
}
