import { Pipe, PipeTransform } from "@angular/core";

//We have to use @Pipe() decorator
@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform{
  //This PipeTransform interface provides a method called transform(),so inside the class
  //we need to have(implement) this method!

  // transform(value: number, totalmarks: number){
  transform(value: number, totalmarks: number, decimal: number){
    //we can specify as many parameters as we want
      return (value / totalmarks * 100).toFixed(decimal);
      //First argument method receives the value on which we are using the pipe
      //rest receive arguments which we have specified for that pipe
  }

}
//We have created a Custom Pipes!

//Now we need to register this file to app.module.ts
