import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { GoOutComponent } from './go-out/go-out.component';
import { SalaryComponent } from './salary/salary.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransfersComponent } from './transfers/transfers.component';


@NgModule({
  declarations: [
    HomeComponent,
    DepositComponent,
    WithdrawalComponent,
    GoOutComponent,
    SalaryComponent,
    NavbarComponent,
    TransaccionesComponent,
    TarjetaComponent,
    TransfersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[
   NavbarComponent
  ]
})
export class HomeModule { }
