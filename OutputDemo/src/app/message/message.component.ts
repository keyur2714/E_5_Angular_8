import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message : string = '';

  @Output()
  messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
//    alert(1);
    let newMessage = this.message+" Radhe Krishna...!";
    this.messageEvent.emit(newMessage);
  }

}
