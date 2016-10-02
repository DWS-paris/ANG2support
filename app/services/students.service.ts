import { Injectable } from '@angular/core';
import { StudentItem } from "../models/student.item";
import { STUDENTS } from '../datas/students.data';

@Injectable()

export class StudentService {

    getStudents(): Promise<StudentItem[]> {
        return Promise.resolve(STUDENTS);
    }

     getStudent(id: number): Promise<StudentItem> {
        return this.getStudents().then(students => students.find(singleStudent => singleStudent.id === id));
    }
};