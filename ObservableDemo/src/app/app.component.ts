import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DummyService, Employee } from './dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DummyService]
})
export class AppComponent implements OnInit{
  title = 'ObservableDemo';
  seqNum = 0;
  subsription : Subscription;
  numberObservable = interval(100);
  empList : Employee[] = [];

  constructor(private dummyService : DummyService){}

  ngOnInit(){
    this.subsription = this.numberObservable.subscribe(
      (data : number)=>{
        this.seqNum = data;
      }
    )
    this.dummyService.getFilteredEmpList().subscribe(
      (data : Employee[])=>{
        this.empList = data;
      }
    )
  }

  stop() : void {
    this.subsription.unsubscribe();
  }
}
