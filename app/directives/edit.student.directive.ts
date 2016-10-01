// Import des composants nécessaire à la création de la directive : à propos des directives https://goo.gl/fGh7QS 
import {Component, Input} from "@angular/core";

import { Config } from '../config';
import { StudentItem } from "../models/student.item";

// Configuration de la directive
@Component({
    selector: 'edit-student',
    templateUrl: 'app/partials/directives/edit.student.component.html',
})

// Export de la class de la directive
export class EditStudentDirective {
    edit = Config.EDIT;
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;
    
    // L’utilisation de la fonction de la class Input permet de recevoir dans la directive les données d’un autre composant.
    @Input() selectedStudent: StudentItem;
}