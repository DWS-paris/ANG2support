import { Injectable } from '@angular/core';
import { StudentItem } from "../models/student.item";
import { STUDENTS } from '../datas/students.data';

@Injectable()

export class StudentService {

    getStudents(): Promise<StudentItem[]> {
        return Promise.resolve(STUDENTS);
    }

     // Ajout d'une fonction récupérant l’ID de la route : à propos des routes dynamiques https://goo.gl/Qe53YN
     getStudent(id: number): Promise<StudentItem> {
        
        // Définition des variables à utiliser dans la route dynamique
        return this.getStudents().then(students => students.find(singleStudent => singleStudent.id === id));
    }
};