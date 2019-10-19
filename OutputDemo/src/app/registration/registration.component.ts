import { Component, OnInit } from '@angular/core';
import { Lookup } from '../my-dropdown/lookup.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  cityList : Lookup[] = [];
  courseList : Lookup[] = [];

  city : Lookup  = new Lookup();
  course : Lookup = new Lookup();

  constructor() { }

  ngOnInit() {
    let city1 = new Lookup(1,'PUN','Pune');
    let city2 = new Lookup(2,'SRT','Surat');
    let city3 = new Lookup(3,'Ind','Indore');
    this.cityList = [city1,city2,city3];
    let course1 = new Lookup(11,'ANG','Angular');
    let course2 = new Lookup(12,'JAVA','Java');
    let course3 = new Lookup(13,'C#','C Sharp');
    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);
  }

  getSelectedCity(city) : void {
    this.city = city;
  }

  getSelectedCourse(course) : void {
    this.course = course;
  }
}
