// Import des composants nécessaire à la création de la directive : à propos des directives https://goo.gl/fGh7QS 
import {Component, Input, Output, EventEmitter} from "@angular/core";

import { Config } from '../config';
import { StudentItem } from "../models/student.item";

// Configuration de la directive
@Component({
    selector: 'add-student',
    templateUrl: 'app/partials/directives/add.student.component.html',
})

// Export de la class de la directive
export class AddStudentDirective {
    add = Config.ADD;
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;

    selectedStudent: StudentItem;
    
    // L’utilisation de la fonction de la class Input permet de recevoir dans la directive les données d’un autre composant.
    @Input() newStudent: StudentItem;

    // L’utilisation de la fonction de la class Output permet d'envoyer dans la directive les données vers un autre composant.
    // La création d’un instance de EventEmitter() permet de créer un événement personnalisé.
    @Output() sendNewStudentData = new EventEmitter();

    addNewStudent(event: any){
        this.sendNewStudentData.emit(this.newStudent);
    };
}