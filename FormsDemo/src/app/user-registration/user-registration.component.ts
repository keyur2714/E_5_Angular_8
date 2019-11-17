import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userForm : FormGroup;
  newUser : User = new User();
  isSubmit : boolean = false;

  constructor() { }

  ngOnInit() {
    this.createUserForm();
  }

  createUserForm() : void {
    this.userForm = new FormGroup({
      name : new FormControl('Ami',[Validators.required,Validators.minLength(3)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      mobileNo : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),  
      age : new FormControl(''),
      gender : new FormControl('F'),
      hobbies : new FormArray([new FormControl('')])
    })
  }

  save():void{
    if(this.userForm.valid){
      console.log(this.userForm.value);
      console.log(this.userForm.controls['name'].value);
      this.newUser = this.userForm.value;
      this.isSubmit = true;
    }
  }

  addControl() : void{
    let newControl = new FormControl('');
    (<FormArray>this.userForm.get('hobbies')).push(newControl);
  }

  updateValidations() :void{    
    let gender = this.userForm.get('gender').value;
    if(gender === 'M'){
      this.userForm.get('age').setValidators([Validators.required]);      
    }else{
      this.userForm.get('age').setValidators([]);      
    }
    this.userForm.updateValueAndValidity();
  }

  resetForm() : void{
    this.userForm.reset();
    // this.userForm.setValue({
    //   name : 'Ami',
    //   email : '',
    //   mobileNo: '',
    //   age : '',
    //   gender : 'F',
    //   hobbies : []
    // });
    this.userForm.patchValue({
      name : 'Ami',
      gender : 'F'      
    });
  }
}
