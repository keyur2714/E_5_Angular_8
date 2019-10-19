import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OutputDemo';

  msg : string = 'Hello';
  newMessage : string = '';

  getMessage(event):void{
    //alert(2);
    alert(event);
    this.newMessage = event;
  }
}
