import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  {path : '', redirectTo : '/home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent },
  {path : 'login', component : LoginComponent },
  {path : 'profile', component : ProfileComponent},
  {path : 'profile/:username', component : ProfileComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'payment', component : PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
