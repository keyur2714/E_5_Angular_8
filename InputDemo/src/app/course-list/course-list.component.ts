import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList : Course[] = [];
  headerList : string[] = ["Code","Name","Fees"];
  fieldList : string[] = ["courseCode","courseName","fees"];

  constructor() { }

  ngOnInit() {
    let course1 = new Course(1,'ANG','Angular',13800);
    let course2 = new Course(2,'JAVA','Java',10800);
    let course3 = new Course(3,'BIGDATA','Hadoop Dev',14800);
    this.courseList = [course1,course2,course3];
  }

}
