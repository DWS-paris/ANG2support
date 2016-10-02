import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { StudentItem } from "../models/student.item";
import { StudentService } from "../services/students.service";


@Component({
    selector: 'edit-student-page',
    templateUrl: 'app/partials/components/edit.student.component.html',
    providers: [StudentService],
})

export class EditStudentComponent implements OnInit  {
    selectedStudent: StudentItem;
    newStudent: StudentItem;
    studentsList: StudentItem[];

    constructor( 
        private studentService: StudentService 
    ){};

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

    getStudents(): void {
        this.studentService.getStudents().then(students => this.studentsList = students);
    }

    ngOnInit(): void {
        this.getStudents();
        this.resetInput();
    }
 }