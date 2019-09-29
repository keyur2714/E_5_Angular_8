import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  // firstName : string = 'Keyur';
  // lastName : string = 'Thakur';
  // age : number = 32;
  // dob : string = '27/12/1986';
  // gender : string = 'Male';
  // contactNo : string = '7387029671';
  // email : string = 'keyurjava27@gmail.com';
  @Input("personal-info")
  person : Person = new Person();

  @Input()
  color : string = 'warning';

  @Input('text-color')
  txtColor : string = 'info';

  constructor() { 
    console.log("Personal Detail Component Object Created...!");
  }

  ngOnInit() {
    console.log("Personal Detail Component Init Method Called...!");
    //this.person.setFirstName('sachin');
  }

}
