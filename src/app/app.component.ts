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
  filterText: string = '';

  constructor(private studentService: StudentService){

  }

  ngOnInit(){
    this.students = this.studentService.students
    this.totalMarks = this.studentService.totalMarks
  }
}
