import { Component } from '@angular/core';
import { Students } from 'src/app/models/students'
import { StudentsService } from 'src/app/services/students.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public students: Students[];

  constructor(private studentService: StudentsService) { 
    this.getStudents()
  }
  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Students;
      })
    });
  }
}
