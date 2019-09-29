import { Component, OnInit } from '@angular/core';
import { Person } from './personal-details/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Profile Demo';

  person : Person = new Person();

  ngOnInit(){
    this.person.setFirstName('denish');
    this.person.lastName = 'patel';
    this.person.age = 32;
    this.person.dob = '24/05/1985';
    this.person.gender = 'Male';
    this.person.contactNo  = '7387029111';
    this.person.email = 'denishjava27@gmail.com';
  }

}
