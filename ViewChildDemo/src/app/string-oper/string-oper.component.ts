import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-string-oper',
  templateUrl: './string-oper.component.html',
  styleUrls: ['./string-oper.component.css']
})
export class StringOperComponent implements OnInit {

  constructor() { 
    console.log("String Operation Component Object Created...!")
  }

  ngOnInit() {
  }

  @ViewChild("str",{static : true})
  strElement : ElementRef;

  @ViewChild("result",{static : true})
  resultElement : ElementRef;

  reverse() : void {    
    let value : string = this.strElement.nativeElement.value;
    let rev : string = value.split('').reverse().join('');
    this.resultElement.nativeElement.innerHTML = rev;
    this.strElement.nativeElement.style.color = 'black';
    this.strElement.nativeElement.style.background = 'yellow';
    this.strElement.nativeElement.value = rev;
  }
}
