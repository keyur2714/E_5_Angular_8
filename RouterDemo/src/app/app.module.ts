import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './auth/authentication.service';
import { LogoutComponent } from './logout/logout.component';
import { TokenInerceptorService } from './token-inerceptor.service';
import { TodoModule } from './todo/todo.module';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,    
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,    
    //TodoModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,    
    [{provide : HTTP_INTERCEPTORS , useClass : TokenInerceptorService,multi : true}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("AppModule Loaded...");
  }
}
