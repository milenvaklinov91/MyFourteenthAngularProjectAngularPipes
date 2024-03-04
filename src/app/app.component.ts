import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [StudentService]
})
export class AppComponent implements OnInit {
  title = 'MyFourteenthAngularProjectAngularPipes';

  // ! <-- ???
  students!: Student[];
  totalMarks!: number;
  _filterText: string = '';
   // ! <-- ???
  filteredStudents!: Student[];
  //filteredStudents: Student[] = [];
  totalStudents = new Promise((resolve, reject) =>{
    //We have callback function(=>) like an argument and it receives 2 arguments (resolve) and (reject) methods
    //Promise is nothing but an object
    setTimeout(() => {
      //Inside the body of that Promise function we call setTimeout function and it has callback function(=>)
      //and second argument time interval (2000ms),then inside the body of callback function (=>) of the setTimeout function
      //we call (resolve) method and inside it we return total number of students inside filteredStudents array
      resolve(this.filteredStudents.length)
    },2000)
  })

    get filterText(){
      return this._filterText;
     }

   set filterText(value: string){
     this._filterText = value;
     this.filteredStudents = this.filterStudentByGender(value);
   }

  constructor(private studentService: StudentService){

  }

  ngOnInit(){
    this.students = this.studentService.students
    this.totalMarks = this.studentService.totalMarks
    this.filteredStudents = this.students
  }

  AddDummyStudent(){
    //This is pure pipe
    // let studentCopy = Object.assign([], this.students)
    // studentCopy.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
    // this.students = studentCopy;

    //This is impure pipe
    this.students.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
    this.filteredStudents = this.filterStudentByGender(this.filterText);
  }

  ChangeGender(){
    //This is pure pipe
    // let studentCopy = Object.assign([], this.students)
    //this is a copy of students array
    // studentCopy[0].gender = 'Female';
    // this.students = studentCopy;

    //This is impure pipe
    this.students[0].gender = 'Female';
    this.filteredStudents = this.filterStudentByGender(this.filterText);
  }

  onMouseMove(){

  }
  filterStudentByGender(filterTerm: string){
    if(this.students.length === 0 || this.filterText === ''){
      return this.students;
  } else {
      return this.students.filter((student) =>
      {
          return student.gender.toLowerCase() === filterTerm.toLowerCase();
      })
    }
  }

}
