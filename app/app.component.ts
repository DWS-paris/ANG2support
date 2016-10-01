import { Component } from '@angular/core';
import { Config } from './config';
import { StudentItem } from "./models/student.item";

// Import du service dans l'application : à propos des services https://goo.gl/uz1cpM
import {StudentService} from "./services/students.service";


@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    styleUrls: ['app/styles/app.component.css'],

    // Configuration du provider pour utiliser le service
    providers: [StudentService],
})

export class AppComponent {
    title = Config.APP_TITLE;
    text = Config.APP_SS_TITLE;
    state = Config.STATE;
    selectedStudent: StudentItem;
    newStudent: StudentItem;

    // Configuration de la variable de la liste
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

    // Ajout du service dans le constructor
    constructor( private studentService: StudentService ){
        this.resetInput();
        
        // Création de la liste en appelant la fonction du service
        this.studentsList = this.studentService.getStudents();
    };
 }