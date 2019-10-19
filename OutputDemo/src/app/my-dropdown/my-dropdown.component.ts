import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lookup } from './lookup.model';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  dataList : Lookup[] = [];

  @Input()
  name : string = '';

  @Input()
  selectedValue : Lookup;

  @Input()
  placeHolder : string = 'Select';

  @Output("getValue")
  getSelectedValue = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit() {
  }

  setSelectedValue() : void {
    //alert(this.selectedValue.desc);
    this.getSelectedValue.emit(this.selectedValue);
  }
}
