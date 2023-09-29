import { HttpClientModule,HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../model/UserRegister';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  
  isLogged: boolean;
  currentUser: any;
  status: number;
  data: any


  constructor(private http:HttpClient, private router:Router) {}

  
  postUserRegister(request:UserRegister) {
    let endpoint = "v1";
    
    return this.http.post(environment.apiUrl +`${endpoint}`,request);
  }


  postUserLogin(request:UserRegister){
    let endpoint = "v2";
    return this.http.post(environment.apiUrl + `${endpoint}`,request);
  }


  getSalaryWinthdrewal(request:UserRegister){
    let endpoint = "v3"
    return this.http.post(environment.apiUrl +`${endpoint}`,request)
  }
  
  getSalaryDeposit(request:UserRegister){
    let endpoint = "v4"
    return this.http.post(environment.apiUrl +`${endpoint}`,request)
  }
  


  // Este método realiza la autenticación y emite el estado de autenticación
  loginUser(request: UserRegister): void {
    this.postUserLogin(request).subscribe(
      {
        next: (data:any)  => {
          if (data !=null){
            // Autenticación exitosa, establecer el estado como autenticado
            this.isAuthenticatedSubject.next(true);
            // Almacena el token en localStorage o en una cookie si es necesario
            localStorage.setItem('currentUser', this.currentUser);
            this.checkAuthentication();
            this.router.navigate(['/home'])
          }else{
              this.isAuthenticatedSubject.next(false);
            } 
        },
        error: (err) => {
          // Manejar errores de autenticación aquí
          console.error('Error en la autenticación', err);
          this.isAuthenticatedSubject.next(false);
        }
      }
    );
  }    
    checkAuthentication(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}

  
  

 