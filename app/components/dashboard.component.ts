import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
import { Router } from '@angular/router';
import { StudentItem } from "../models/student.item";
import { StudentService } from "../services/students.service";

@Component({
    selector: 'dashboard-page',
    templateUrl: 'app/partials/components/dashboard.component.html',
    providers: [StudentService],
})

export class DashboardComponent implements OnInit {
    studentsList: StudentItem[] = [];
    
    constructor( 
        private router: Router,
        private studentService: StudentService 
    ){};

    gotoStudentDetails(student: StudentItem): void {
        let id = ['/detail', student.id];
        this.router.navigate(id);
    };

    ngOnInit(): void {
        this.studentService.getStudents().then(studentsList => this.studentsList = studentsList);
    };
 }