import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salute'
})
export class SalutePipe implements PipeTransform {

  transform(value: any, param: string[], greeting:string): any {
    console.log("value paseed" +value);
    console.log("param passed" +param);
    var retValue:string;
    if(param && greeting){
      console.log("param is passed" +param[0]);
   retValue = greeting;
   for(let i=0;i<param.length;i++){
     retValue=retValue+param[1];
   }
    retValue=retValue+value;
      return retValue;
      // return greeting+""+param[0]+""+value;
    }
    else if(greeting){
      return greeting+""+value;
    }
    else{
      return "hi"+value;
    }






  }

}
