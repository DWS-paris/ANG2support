import {Component,Input, OnInit} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../services/students.service'

import { Config } from '../config';
import { StudentItem } from "../models/student.item";

@Component({
    selector: 'student-detail',
    templateUrl: 'app/partials/components/student.details.component.html',
})
export class StudentDetailsComponent implements OnInit{
    edit = Config.EDIT;
    deleteBtn = Config.DELETE_BTN;
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;
    saveBtn = Config.SAVE;
    backBtn = Config.BACK;
    
    singleStudent: StudentItem;

    @Input() newStudent: StudentItem;
    
    studentsList: StudentItem[] = [];

    constructor(
        private studentService: StudentService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.studentService.getStudent(id).then(singleStudent => this.singleStudent = singleStudent);
        })
    };

    save(): void {
        this.studentService.update(this.singleStudent)
        .then(() => this.goBack());
    }

    // Création d'une fonction pour supprimer une entrée : à propos du service HTTP https://goo.gl/S6imGs
    delete(studentId: any): void {
        // Selection du service
        this.studentService
        // Appel de la fonction .delete() prenant l'ID en paramètre
        .delete(studentId)
        // Appel de la fonction .then() : suppréssion de l'entrèe
        .then(() => {
            this.studentsList = this.studentsList.filter(h => h != studentId);
            if (this.singleStudent.id == studentId) { this.singleStudent = null; }
            this.location.back();
        });
    }

    goBack(): void {
        this.location.back();
    }
}