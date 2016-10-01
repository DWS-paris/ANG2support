import { Component } from '@angular/core';
import { Config } from '../config';
import { StudentItem } from "../models/student.item";
import { StudentService } from "../services/students.service";


@Component({
    selector: 'dashboard-page',
    templateUrl: 'app/partials/components/dashboard.component.html',
    providers: [StudentService],
})

export class DashboardComponent {
    studentsList: StudentItem[];
    
    constructor( private studentService: StudentService ){
        this.studentsList = this.studentService.getStudents();
    };
 }