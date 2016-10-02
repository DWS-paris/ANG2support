"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Importer des services Headers et Http : à propos du service HTTP https://goo.gl/S6imGs
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var StudentService = (function () {
    // Ajout du service Http dans le constructor
    function StudentService(http) {
        this.http = http;
        // Récupération de l'adresse de l'API
        this.studentsUrl = 'app/studentsDb';
    }
    // Création d'une variable pour la gestion des erreurs
    StudentService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ;
    ;
    // Modification de la fonction getStudent
    StudentService.prototype.getStudents = function () {
        // Utilisation de la fonction .get()
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ;
    // Création d'un fonction pour mettre une entrée
    StudentService.prototype.update = function (student) {
        // Définition de l'adresse de l'appel API
        var url = this.studentsUrl + "/" + student.id;
        // Envoie de la requête HTTP
        return this.http
            .put(url, JSON.stringify(student), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .toPromise()
            .then(function () { return student; })
            .catch(this.handleError);
    };
    ;
    // Création d'un fonction pour ajouter une entrée
    StudentService.prototype.create = function (newStudent) {
        // Envoie de la requête HTTP
        return this.http
            .post(this.studentsUrl, JSON.stringify(newStudent), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ;
    // Création d'une fonction pour supprimer une entrée
    StudentService.prototype.delete = function (id) {
        // Définition de l'adresse pour l'appel API
        var url = this.studentsUrl + "/" + id;
        // Envoie de la requête HTTP
        return this.http
            .delete(url, { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    StudentService.prototype.getStudent = function (id) {
        return this.getStudents().then(function (students) { return students.find(function (singleStudent) { return singleStudent.id === id; }); });
    };
    ;
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
;
//# sourceMappingURL=students.service.js.map