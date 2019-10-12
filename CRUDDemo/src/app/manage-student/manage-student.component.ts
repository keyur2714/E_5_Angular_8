import { Component, OnInit } from '@angular/core';
import { Student } from '../manage-friends/student.model';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {

  studentList : Student[] = [];
  newStudent : Student = new Student(54);
  updateIdx : number = -1;
  selectedStudent : Student = new Student();

  constructor() { }

  ngOnInit() {
    let student1 = new Student(32,"keyur","7387029671","keyurjava27@gmail.com");
    let student2 = new Student(26,"denish","7387029111","denishjava26@gmail.com");
    let student3 = new Student(44,"vinit","7387029222","vinitmarketing44@gmail.com");
    this.studentList.push(student1);
    this.studentList.push(student2);
    this.studentList.push(student3);
    //this.studentList = [student1,student2,student3];
  }

  edit(idx : number) : void {
    this.newStudent = this.studentList[idx];
    this.updateIdx = idx;
  }

  update() : void {
      this.studentList[this.updateIdx] = this.newStudent;
      alert("Student Update Successfully.");
      this.newStudent = new Student();
      this.updateIdx = -1;    
  }

  save() : void {
    let isExisting : Student = this.studentList.find(f=>f.rollNo == this.newStudent.rollNo);
    if(isExisting === undefined || isExisting === null){
      this.studentList.push(this.newStudent);
      alert("Student Saved Successfully.");
      this.newStudent = new Student();
    }else{
      alert("Already Exist");
    }
  }

  setSelectedStudent(currentStudent : Student):void{
    this.selectedStudent = currentStudent;
  }
}
