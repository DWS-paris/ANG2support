import { Component } from '@angular/core';
import { Config } from './config';
import { StudentItem } from "./models/student.item";
import {StudentService} from "./services/students.service";


@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    styleUrls: ['app/styles/app.component.css'],
    providers: [StudentService],
})

export class AppComponent {
    title = Config.APP_TITLE;
    text = Config.APP_SS_TITLE;
    state = Config.STATE;
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