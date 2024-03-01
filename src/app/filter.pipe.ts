import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "./student";
@Pipe({
  name: 'filterStudent'
})
export class FileterPipe implements PipeTransform{
  transform(students: Student[], filterText: string) {
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
