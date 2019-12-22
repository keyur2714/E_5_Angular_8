import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(accountNo:string, maskChar : string,noOfChar : number): any {
    //alert(accountNo+" "+maskChar+" "+noOfChar);
    let maskChars = '';
    let visibleChars = accountNo.substring(accountNo.length-noOfChar,accountNo.length);
    for(let i=1;i<=accountNo.length-noOfChar;i++){
      maskChars = maskChars + maskChar;
    }    

    return maskChars+visibleChars;
  }

}
