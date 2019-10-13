import { Component } from '@angular/core';

@Component({
    selector : 'app-page-notfound',
    template : `<h1 [ngClass]="errorStyleClassName">{{errorCode}} ! Page Not Found</h1>`,
    styles : ['h1{color : blue}','.errorStyle{color : red;,background : black;,border : 1px solid red;}']
})
export class PageNotFoundComponent{
    errorCode : number = 404;
    errorStyleClassName : string = 'errorStyle';
    constructor(){}
}