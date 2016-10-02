// Création d'une directive : à propos des directives https://goo.gl/fGh7QS 
import {Component, Input, Output, EventEmitter} from "@angular/core";

import { Config } from '../config';
import {StudentItem} from "../models/student.item";

@Component({
    selector: 'student-item',
    templateUrl: 'app/partials/directives/student.details.component.html',
})

export class StudentDirective {
    editBtn = Config.EDIT_BTN;
    state1 = Config.STATE1;
    state2 = Config.STATE2;
    state3 = Config.STATE3;
    
    @Input() student: StudentItem;
    @Output() sendStudentDetail = new EventEmitter();

    onSelect(event: Event){
        this.sendStudentDetail.emit(this.student);
    }
}