import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';

  //num : number = 0;
  numObservable : Observable<number> = interval(1000);

  name : string = 'radhe krishna...!';

  todaysDate : Date = new Date();

  friends : string[] = ["keyur","denish","vinit","ravi","hiren","sachin"];

  price : number = 1211;


  accountNo : string = '9898012124';

  person = {
    name : "keyur",
    city : "surat"
  };

  ngOnInit(){
    // this.numObservable.subscribe(
    //   (data)=>{
    //     this.num = data;
    //   }
    // )
  }
}
