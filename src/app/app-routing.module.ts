import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PruebaFormComponent } from './prueba-form/prueba-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from "./_helpers/auth.guard";

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'list', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form' , component: PruebaFormComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
