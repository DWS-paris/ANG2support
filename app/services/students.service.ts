// Création du service : à propos des services https://goo.gl/uz1cpM
import { Injectable } from '@angular/core';

// Import des class utilisées dans le service
import { StudentItem } from "../models/student.item";
import { STUDENTS } from '../datas/students.data';

// Injecter le service dans l'application
@Injectable()

// Export du service
export class StudentService {
    // Création d'un fonction pour charger les données
    getStudents(): StudentItem[]{
        return STUDENTS;
     };
};