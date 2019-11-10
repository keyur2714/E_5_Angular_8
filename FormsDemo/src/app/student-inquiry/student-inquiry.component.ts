import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-inquiry',
  templateUrl: './student-inquiry.component.html',
  styleUrls: ['./student-inquiry.component.css']
})
export class StudentInquiryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(frm : NgForm) : void {
    console.log(frm);
    console.log(frm.value);
  }

}
