import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Departent } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  deptForm : FormGroup;

  constructor(private formBuider : FormBuilder) { }

  ngOnInit() {
    this.createDepartmentForm();
  }

  createDepartmentForm() : void {
    this.deptForm = this.formBuider.group(
      new Departent());
  }

  save() : void{
    console.log(this.deptForm.value);
  }
}
