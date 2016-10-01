import { Component } from '@angular/core';
import { Config } from '../config';
import { StudentItem } from "../models/student.item";
import { StudentService } from "../services/students.service";


@Component({
    selector: 'edit-student-page',
    templateUrl: 'app/partials/components/edit.student.component.html',
    providers: [StudentService],
})

export class EditStudentComponent {
    selectedStudent: StudentItem;
    newStudent: StudentItem;
    studentsList: StudentItem[];

    onSelect(student: StudentItem){
        this.selectedStudent = student;
    };
    
    addNewStudent(){
        this.studentsList.push(this.newStudent);
        this.resetInput();
    };

    resetInput(){
        this.newStudent = {id: 0, firstName: '', lastName: '', state: 1}
    }

    constructor( private studentService: StudentService ){
        this.resetInput();
        this.studentsList = this.studentService.getStudents();
    };
 }