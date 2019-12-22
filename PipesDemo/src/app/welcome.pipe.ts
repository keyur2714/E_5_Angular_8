import { Pipe, PipeTransform, OnInit } from '@angular/core';

@Pipe({
  name: 'welcome',
  pure: true
})
export class WelcomePipe implements PipeTransform, OnInit {

  constructor(){
    console.log("Welcome Pipe Object created....");
  }

  ngOnInit(){
    console.log("Pipe Init Called");
  }

  transform(value: any, ...args: any[]): any {
    //alert(value);
    console.log("inside transform");
    let newValue = "Welcome "+value;
    return newValue;
  }

}
