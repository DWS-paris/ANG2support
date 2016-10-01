import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    styleUrls: ['app/styles/app.component.css']
})

export class AppComponent {
    private title = 'Student Platform';
    private text = 'Liste des étudiants';
    private state1 = 'Etudiant présent';
    private state2 = 'Etudiant en retard';
    private state3 = 'Etudiant absent';

    // Création d'une variable pour le jeu de donnée
    private studentsList: [any];

    // Création d'un constructor pour envoyer le jeu de données dans la vue
    constructor(){
        // Création du jeu de données
        this.studentsList = [
            {id: 0, firstName: 'Pierre', lastName: 'Stone', state: 2},
            {id: 1, firstName: 'Sophie', lastName: 'Bourdon', state: 3},
            {id: 2, firstName: 'Jacques', lastName: 'Rakchy', state: 2},
            {id: 3, firstName: 'Julie', lastName: 'Bicoule', state: 1},
            {id: 4, firstName: 'Charles', lastName: 'Violon', state: 1},
            {id: 5, firstName: 'Claire', lastName: 'Obscure', state: 1},
        ]
    };
 }