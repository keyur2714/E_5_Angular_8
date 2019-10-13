import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-data-table',
  templateUrl: './my-data-table.component.html',
  styleUrls: ['./my-data-table.component.css']
})
export class MyDataTableComponent implements OnInit {

  @Input()
  dataList : any[] = [];

  @Input()
  headerList : string[] = [];

  @Input()
  fieldList : string[] = [];

  @Input()
  bgColor : string = 'dark';

  @Input()
  textColor : string = 'info';

  constructor() { }

  ngOnInit() {
  }

}
