import {Component, OnInit} from "@angular/core";
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
    firstName = Config.FIRSTNAME;
    lastName = Config.LASTNAME;
    back = Config.BACK;
    
    singleStudent: StudentItem;

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
    }

    goBack(): void {
        this.location.back();
    }
}