import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.createUserForm();
  }

  createUserForm() : void {
    this.userForm = new FormGroup({
      name : new FormControl('keyur',Validators.required)
    })
  }

  save():void{
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }
}
