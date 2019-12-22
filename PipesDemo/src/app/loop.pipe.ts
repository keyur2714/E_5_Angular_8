import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loop'
})
export class LoopPipe implements PipeTransform {

  transform(value: string, loopCnt : number): any {
    let newValue = '';
    for(let i=1;i<=loopCnt;i++){
      newValue = newValue + value +" ";
    }
    return newValue;
  }

}
