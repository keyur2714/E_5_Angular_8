import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyFor]'
})
export class MyForDirective {

  constructor(private templateRef: TemplateRef<any> , private viewContainerRef : ViewContainerRef) { }

  @Input('appMyFor') set myFor(loopCnt : number) {
     //alert(loopCnt); 
     for(let i=1;i<=loopCnt;i++){
        this.viewContainerRef.createEmbeddedView(this.templateRef);   
     }
  }

}
