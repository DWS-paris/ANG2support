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


    // Création d'un fonction pour ajouter une entrée dans l'API
    addNewStudent(newStudent: any): void {

        // Vérification de la variable à ajouter
        if (!newStudent) { return; }
        
        // Appel de la fonction create() du service
        this.studentService.create(this.newStudent)
        
        // Appel de la fonction .then() : ajout de la nouvell entrée
        .then(newStudent => {
            this.studentsList.push(this.newStudent);
            this.resetInput();
        });
    }

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