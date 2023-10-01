import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { GoOutComponent } from './home/go-out/go-out.component';
import { SalaryComponent } from './home/salary/salary.component';
import { LoginComponent } from './pages/login/login.component';
import { WithdrawalComponent } from './home/withdrawal/withdrawal.component';
import { TransfersComponent } from './transferencias/transfers/transfers.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DepositComponent } from './home/deposit/deposit.component';
import { TransaccionesComponent } from './home/transacciones/transacciones.component';
import { TarjetaComponent } from './home/tarjeta/tarjeta.component';

const routes: Routes = [
 
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
  path:'home',
  component:HomeComponent,
  },
  {
    path:'',component:LoginComponent
  },
    {path:'salary',component:SalaryComponent},
    {path:'withdrawal',component:WithdrawalComponent},
    {path:'transfers',component:TransfersComponent},
    {path:'go-out',component:GoOutComponent},
    {path:'deposit',component:DepositComponent},
    {path:'transacciones',component:TransaccionesComponent},
    {path:'tarjeta',component:TarjetaComponent},
    {path:'**',redirectTo:'login',pathMatch:'full'}
  ] 
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
