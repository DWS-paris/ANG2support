// Création d'une directive : à propos des directives https://goo.gl/fGh7QS 
import {Component, Input} from "@angular/core";

import { Config } from '../config';
import { StudentItem } from "../models/student.item";

@Component({
    selector: 'edit-student',
    templateUrl: 'app/partials/directives/edit.student.component.html',
})

export class EditStudentDirective {
    edit = Config.EDIT;
    deleteBtn = Config.DELETE_BTN;
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;
    
    @Input() selectedStudent: StudentItem;
}