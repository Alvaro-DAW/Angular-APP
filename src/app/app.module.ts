import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DadesProductesService } from './service/dades-productes.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListFilterPipe } from './product-list/product-list-filter.pipe';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PruebaFormComponent } from './prueba-form/prueba-form.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ErrorInterceptor } from './_helpers/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductListFilterPipe,
    PruebaFormComponent,
   
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   ReactiveFormsModule
    
  ],
  providers: [DadesProductesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,],
              
  bootstrap: [AppComponent],
  
})
export class AppModule { }
