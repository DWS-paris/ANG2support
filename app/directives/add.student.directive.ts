// Création d'une directive : à propos des directives https://goo.gl/fGh7QS 
import {Component, Input, Output, EventEmitter} from "@angular/core";

import { Config } from '../config';
import { StudentItem } from "../models/student.item";

@Component({
    selector: 'add-student',
    templateUrl: 'app/partials/directives/add.student.component.html',
})

export class AddStudentDirective {
    add = Config.ADD;
    addStudent = Config.ADD_STUDENT;
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;
    state = Config.STATE;
    selectedStudent: StudentItem;

    @Input() newStudent: StudentItem;
    @Output() sendNewStudentData = new EventEmitter();

    addNewStudent(event: any){
        this.sendNewStudentData.emit(this.newStudent);
    };
}