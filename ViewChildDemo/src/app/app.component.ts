import { Component, ElementRef, ViewChild } from '@angular/core';
import { StringOperComponent } from './string-oper/string-oper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChildDemo';

  @ViewChild("s",{static : true})
  sElement : ElementRef;

  @ViewChild(StringOperComponent,{static : true})
  stringOperComponent : StringOperComponent;

  makeReverce() : void {
    this.stringOperComponent.strElement = this.sElement;
    this.stringOperComponent.reverse();
  }
}
