import { Component } from '@angular/core';

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  state: number;
}

const STUDENTS: Student[] = [
    {id: 0, firstName: 'Pierre', lastName: 'Stone', state: 2},
    {id: 1, firstName: 'Sophie', lastName: 'Bourdon', state: 3},
    {id: 2, firstName: 'Jacques', lastName: 'Rakchy', state: 2},
    {id: 3, firstName: 'Julie', lastName: 'Bicoule', state: 1},
    {id: 4, firstName: 'Charles', lastName: 'Violon', state: 1},
    {id: 5, firstName: 'Claire', lastName: 'Obscure', state: 1},
];

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    styleUrls: ['app/styles/app.component.css'],
})

export class AppComponent {
    title = 'Student Platform';
    text = 'Liste des étudiants';
    editBtn = 'Modifier';
    edit = 'Editer : ';
    state = 'Etat : ';
    add = 'Ajouter';
    firstName = 'Prénom :';
    lastName = 'Nom :';
    studentsList = STUDENTS;
    selectedStudent: Student;
    newStudent: Student;

    onSelect(student: Student): void {
        this.selectedStudent = student;
    }
    
    addNewObject(){
        this.studentsList.push(this.newStudent);
        this.resetInput();
    };

    resetInput(){
        this.newStudent = {id: 0, firstName: '', lastName: '', state: 1}
    }

    constructor(){
        this.resetInput();
    };
 }