import { Directive, ElementRef, AfterViewChecked, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements AfterViewInit{

  @Input()
  color : string = 'red';
  @Input()
  backgrund : string = 'yellow';
  @Input()
  fontSize : string = '20px';

  constructor(private elementRef : ElementRef) { 
    console.log("StyleDirective Object Created...!");    
  }

  ngAfterViewInit(){
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.style.background = this.backgrund;
  }

}
