import {Component, OnInit} from "@angular/core";

// Import des class pour configurer des routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../services/students.service'

import { Config } from '../config';
import { StudentItem } from "../models/student.item";

@Component({
    selector: 'student-detail',
    templateUrl: 'app/partials/components/student.details.component.html',
})

// Implémenter la fonction OnInit
export class StudentDetailsComponent implements OnInit{
    edit = Config.EDIT;
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;
    
    singleStudent: StudentItem;

    // Ajout du service et des routes dans le composant
    constructor(
        private studentService: StudentService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    // Création d'un fonction applée au chargelent du composant
    ngOnInit(): void {

        // Récupération du maramêtre de la route dynamique
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            // Appel de la fonction du service pour afficher la vue de la route dynamique
            this.studentService.getStudent(id).then(singleStudent => this.singleStudent = singleStudent);
        })
    }
}