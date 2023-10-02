import { HttpClientModule, HttpClient, HttpStatusCode, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../model/UserRegister';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItem } from '../model/MenuItem';
import { UsuarioTarjeta } from '../model/UsuarioTarjeta';

@Injectable({
  providedIn: 'root'
})
export class UserService {




  currentUser: any;
  status: number;
  data: any


  constructor(private http: HttpClient, private router: Router) { }


  getFromLocalStorage() {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;

  }


  postUserRegister(request: UserRegister) {

    let endpoint = "v1";
    return this.http.post(environment.apiUrl + `${endpoint}`, request);

  }


  postUserLogin(request: UserRegister) {

    let endpoint = "v2";
    return this.http.post(environment.apiUrl + `${endpoint}`, request);


  }


  getSalaryWinthdrewal(request: UserRegister) {

    let endpoint = "v3"
    return this.http.post(environment.apiUrl + `${endpoint}`, request)

  }

  getSalaryDeposit(request: UserRegister) {
    let endpoint = "v4"
    return this.http.post(environment.apiUrl + `${endpoint}`, request)

  }

  getMovimientos(request: UserRegister) {
    let endpoint = "v6"
    return this.http.post(environment.apiUrl + `${endpoint}`, request)

  }


  transferencia(dinero: number, cbu: number, email: string,) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let endpoint = "v5"
    const data = {
      dinero: dinero,
      cbu: cbu,
      email: email
    }
    return this.http.post(environment.apiUrl + `${endpoint}`, data);

  }


  getMenuItems(): Observable<MenuItem[]> {
    let endpoint = "v7"
    return this.http.get<MenuItem[]>(environment.apiUrl + `${endpoint}`);

  }


  getTarjeta(request: UsuarioTarjeta) {
    let endpoint = "v8";
    return this.http.post(environment.apiUrl + `${endpoint}`, request);

  }

}













