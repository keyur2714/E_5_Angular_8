import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage  :string = '';
  loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder,private authenticationService : AuthenticationService,private router : Router) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() : void {
    this.loginForm = this.formBuilder.group({
      userName : this.formBuilder.control([''],Validators.required),
      password : this.formBuilder.control([''],Validators.required)
    })
  }

  login() : void{
    if(this.loginForm.valid){
      this.authenticationService.authenticate(this.loginForm.controls['userName'].value,this.loginForm.controls['password'].value).subscribe(
        (user : User)=>{
          if(user !== null && user !== undefined){
            sessionStorage.setItem("user",JSON.stringify(user));
            sessionStorage.setItem("token",user.token);
            this.router.navigate([this.authenticationService.defaultSuccessPage]);
          }else{
            this.errorMessage = 'Invalid username or password';
          }          
        }
      )
    }
  }
}
