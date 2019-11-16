import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../model/course.model';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-student-inquiry',
  templateUrl: './student-inquiry.component.html',
  styleUrls: ['./student-inquiry.component.css']
})
export class StudentInquiryComponent implements OnInit {

  isSubmit : boolean = false;
  student : Student = new Student();

  courseList : Course[] = [
    new Course(1,'ANG','Angular',13800),
    new Course(2,'JAVA','Java',10800),
    new Course(3,'PYT','Python',8800)
  ];

  constructor() { }

  ngOnInit() {
    this.student.gender = 'M';
    this.student.course = this.courseList[0];
  }

  save(frm : NgForm) : void {
    console.log(frm);
    console.log(frm.value);
    if(frm.valid){
      this.student.display();
      this.isSubmit = true;
    }
  }

}
