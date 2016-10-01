import { Component } from '@angular/core';

// Création d'un type d'objet (constructeur)
export class Student {
  id: number;
  firstName: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    // Créer un fichier de styles : à propos des styles : https://goo.gl/jTkmZA
    styleUrls: ['app/styles/app.component.css']
})

export class AppComponent {

    // Envoyer des variables dans la vue : à propos des variables https://goo.gl/UGMdDh
    title = 'Student Platform';
    text = 'Liste des étudiants';
    edit = 'Editer le prénom de l\'étudiant'

    // Création d'un objet utilisant un constructeur
    student: Student = {
        id: 0,
        firstName: 'Pierre'
    };
 }