import { Directive , TemplateRef , ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { 
    console.log("My If Directive Object Created...!");
    console.log(this.templateRef.elementRef.nativeElement);
  }

  @Input("appMyIf") set myIf(condition : boolean){
    //alert(condition);
    if(condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

  @Input() set appMyIfParam1(param1 : string){
    //alert(param1);
    console.log(param1);
  }

}
