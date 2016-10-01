import { Component } from '@angular/core';

export class Student {
  id: number;
  firstName: string;

  // Modification du constructeur
  lastName: string;
  state: number;
}

// Création d'un jeu de données utilisant un constructeur : à propos du *ngFor https://goo.gl/HGcdt5
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
    edit = 'Editer : ';

    // Utilisation du jeu de données
    studentsList = STUDENTS;
 }