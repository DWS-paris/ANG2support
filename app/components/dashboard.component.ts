import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

// Import du router pour configurer les routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
import { Router } from '@angular/router';

import { StudentItem } from "../models/student.item";
import { StudentService } from "../services/students.service";


@Component({
    selector: 'dashboard-page',
    templateUrl: 'app/partials/components/dashboard.component.html',
    providers: [StudentService],
})

// Implémentation de la fonction OnInt
export class DashboardComponent implements OnInit {
    studentsList: StudentItem[] = [];
    
    // Définition du router et du service
    constructor( 
        private router: Router,
        private studentService: StudentService 
    ){};

    // Création d'une fonction pour écrire une route dynamique
    gotoStudentDetails(student: StudentItem): void {
        
        // Récuparation du paramêtre de la route
        let id = ['/detail', student.id];
        
        // Fonction pour afficher la vue de la route
        this.router.navigate(id);
    };


    ngOnInit(): void {
        this.studentService.getStudents().then(studentsList => this.studentsList = studentsList);
    };
 }