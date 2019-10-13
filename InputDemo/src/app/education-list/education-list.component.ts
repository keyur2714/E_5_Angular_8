import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  educationList : Education[] = [
    new Education(1,'SSE',2001,'Dist'),
    new Education(2,'HSE',2003,'First'),
    new Education(3,'B-Tech',2007,'First')
  ];

  headerList : string[] = ["Id","Degree","Year","Grade"];
  fieldList : string[] = ["id","degree","year","grade"];

  constructor() { }

  ngOnInit() {
  }

}
