import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { StudentItem } from "../models/student.item";
import { STUDENTS } from '../datas/students.data';

@Injectable()

export class StudentService {

    // URL de l'api "in memory" (nom de la Db)
    private studentsUrl = 'app/studentsDb';

    // Création d'une variable pour la gestion des erreurs
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // Ajout de l'api dasn le constructor
    constructor(private http: Http) { }

    getStudents(): Promise<StudentItem[]> {
    return this.http.get(this.studentsUrl)
        .toPromise()
        .then(response => response.json().data as StudentItem[])
        .catch(this.handleError);
    }


     getStudent(id: number): Promise<StudentItem> {
        return this.getStudents().then(students => students.find(singleStudent => singleStudent.id === id));
    }
};