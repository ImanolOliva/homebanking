import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree,Navigation } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/model/UserRegister';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;
  status: number;
  data: any

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.email)
    });
  }

  save()  {
    let userRegister = new UserRegister();

    userRegister.password = this.form.get('password').value;
    userRegister.email = this.form.get('email').value;

      this.userService.postUserLogin(userRegister).subscribe({
        next: (data: any) => {
          localStorage.setItem('currentUser', JSON.stringify(data));
        },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'contraseña u email no valido',
          footer: '<a href="">Vuelve a iniciar sesion</a>',
          
        })   
         console.log(err);
      },
      complete:() =>{ 
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido',
          showConfirmButton: false,
          timer: 2500
          });
          this.router.navigate(['/home']);
      },
    });
  }


}




