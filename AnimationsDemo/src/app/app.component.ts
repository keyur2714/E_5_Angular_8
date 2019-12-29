import { Component, HostBinding, OnInit } from '@angular/core';
import { STATE_ANIMATION } from './animations/simple-state.animation';
import { ON_OFF_2_ANIMATION } from './animations/on-off-2.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './animations/round-anticlock.animation';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations :[
              STATE_ANIMATION,
              ON_OFF_2_ANIMATION,
              ROUND_ANTICLOCK_ANIMATION
            ]
})
export class AppComponent implements OnInit{
  title = 'AnimationsDemo';
  state : string = 'start';
  onOffState  :string = 'on';
  isLoaded : boolean = false;
  numObservable : Observable<number> = interval(1000)

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger= 'in';
  @HostBinding('style.display')   display = 'block';
 // @HostBinding('style.position')  position = 'absolute'; 

  friendsList : string[] = ["keyur","denish","vinit","hiren","ravi"];

  changeState() : void {
    this.state = this.state === 'start' ? 'stop' : 'start';
    this.onOffState = this.onOffState === 'on' ? 'off' : 'on';
  }

  ngOnInit() {
    this.numObservable.subscribe(
      (data)=>{
        if(data >= 15){
          this.isLoaded = true;          
        }
      }
    )
  }
}
