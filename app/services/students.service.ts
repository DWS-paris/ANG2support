import { Injectable } from '@angular/core';

// Importer des services Headers et Http : à propos du service HTTP https://goo.gl/S6imGs
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { StudentItem } from "../models/student.item";

@Injectable()

export class StudentService {

    // Récupération de l'adresse de l'API
    private studentsUrl = 'app/studentsDb';

    // Création d'une variable pour la gestion des erreurs
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };

    // Ajout du service Http dans le constructor
    constructor(private http: Http) { };

    // Modification de la fonction getStudent
    getStudents(): Promise<StudentItem[]> {

        // Utilisation de la fonction .get()
        return this.http.get(this.studentsUrl)
            // Appel de la promesse
            .toPromise()
            // Utilisation de la fonction .then() : alimentation du jeu de données
            .then(response => response.json().data as StudentItem[])
            // Capture du code erreur
            .catch(this.handleError);

    };

    // Création d'un fonction pour mettre une entrée
    update(student: StudentItem): Promise<StudentItem> {

        // Définition de l'adresse de l'appel API
        const url = `${this.studentsUrl}/${student.id}`;

        // Envoie de la requête HTTP
        return this.http

        // Définition du header de la requête
        .put(url, JSON.stringify(student), { headers: new Headers({'Content-Type': 'application/json'}) })

        // Appel de la promesse
        .toPromise()

        // Utilisation de la fonction .then() : modification de l'objet student
        .then(() => student)

        // Capture du code erreur
        .catch(this.handleError);
    };

    // Création d'un fonction pour ajouter une entrée
    create(newStudent: StudentItem): Promise<StudentItem> {
        // Envoie de la requête HTTP
        return this.http

        // Définition du header de la requête
        .post(this.studentsUrl, JSON.stringify(newStudent), {headers: new Headers({'Content-Type': 'application/json'})})

        // Appel de la promesse
        .toPromise()

        // Utilisation de la fonction .then() : ajout d'une nouvelle entrée
        .then(res => res.json().data)

        // Capture du code erreur
        .catch(this.handleError);
    };

    // Création d'une fonction pour supprimer une entrée
    delete(id: number): Promise<void> {
        // Définition de l'adresse pour l'appel API
        const url = `${this.studentsUrl}/${id}`;

        // Envoie de la requête HTTP
        return this.http

        // Appel de la fonction .delete() prenant l'url et la définition du Header en paramètre
        .delete(url, {headers: new Headers({'Content-Type': 'application/json'})})
        
        // Appel de la promesse
        .toPromise()

        // Utilisation de la fonction .then() : rien à faire
        .then(() => null)

        // Capture du code erreur
        .catch(this.handleError);
    }


     getStudent(id: number): Promise<StudentItem> {
        return this.getStudents().then(students => students.find(singleStudent => singleStudent.id === id));
    };
};