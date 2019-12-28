import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  sayHello() : string{
    return "Hello Radhe Krishna...!";
  }
}
