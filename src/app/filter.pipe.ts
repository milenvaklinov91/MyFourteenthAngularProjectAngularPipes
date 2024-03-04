import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";
@Pipe({
  name: 'filterStudent',
  pure: false
})
export class FileterPipe implements PipeTransform{
  transform(students: Student[], filterText: string) {
    console.log('Filter pipe called!');
    if(students.length === 0 || filterText === ``){
    return students;
    } else {
      return students.filter((student) =>
      {
        return student.gender.toLowerCase() === filterText.toLowerCase()
      })
                    //this is callback function
      //Here from this students array we want to filter student based on their gender
    }
  }

}

//We have created a Custom Pipes!

//Now we need to register this file to app.module.ts
