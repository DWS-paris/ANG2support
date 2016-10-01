import { Injectable } from '@angular/core';
import { StudentItem } from "../models/student.item";
import { STUDENTS } from '../datas/students.data';

@Injectable()

export class StudentService {
    getStudents(): StudentItem[]{
        return STUDENTS;
     };
};