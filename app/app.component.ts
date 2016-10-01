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
    firstName = 'Prénom :';
    lastName = 'Nom :';
    studentsList = STUDENTS;

    // Création d'un varialbe pour le ngModel : à propos de ngModel https://goo.gl/i7hAq6 
    selectedStudent: Student;

    // Création d'un fonction disponible dans la vue : à propos du binding https://goo.gl/GDr3rl
    onSelect(student: Student): void {
        this.selectedStudent = student;
    }
 }