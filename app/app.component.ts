import { Component } from '@angular/core';

// Importer la config : à propos du fichier de configuration https://goo.gl/uMHHY1
import { Config } from './config'

// Importer le model dans le composant : à propos des models https://goo.gl/DsFwMk
import { StudentItem } from "./models/student.item";


@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    styleUrls: ['app/styles/app.component.css'],
})

export class AppComponent {
    
    // Utilisation des constantes
    title = Config.APP_TITLE;
    text = Config.APP_SS_TITLE;
    editBtn = Config.EDIT_BTN;
    edit = Config.EDIT;
    state = Config.STATE;
    add = Config.ADD;
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;

    // Utilisation du model de données
    selectedStudent: StudentItem;
    newStudent: StudentItem;

    // Création d'une variable pour uriliser un model de données
    studentsList: [any];

    onSelect(student: StudentItem): void {
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

        // Définition d'une collection de données utilisant le model/constructor
        this.studentsList = [
            new StudentItem({id: 0, firstName: 'Pierre', lastName: 'Stone', state: 2}),
            new StudentItem({id: 1, firstName: 'Sophie', lastName: 'Bourdon', state: 3}),
            new StudentItem({id: 2, firstName: 'Jacques', lastName: 'Rakchy', state: 2}),
            new StudentItem({id: 3, firstName: 'Julie', lastName: 'Bicoule', state: 1}),
            new StudentItem({id: 4, firstName: 'Charles', lastName: 'Violon', state: 1}),
            new StudentItem({id: 5, firstName: 'Claire', lastName: 'Obscure', state: 1}),
        ]
    };
 }