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
// Création d'un type d'objet (constructeur)
var Student = (function () {
    function Student() {
    }
    return Student;
}());
exports.Student = Student;
var AppComponent = (function () {
    function AppComponent() {
        // Envoyer des variables dans la vue : à propos des variables https://goo.gl/UGMdDh
        this.title = 'Student Platform';
        this.text = 'Liste des étudiants';
        this.edit = 'Editer le prénom de l\'étudiant';
        // Création d'un objet utilisant un constructeur
        this.student = {
            id: 0,
            firstName: 'Pierre'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/partials/app.component.html',
            // Créer un fichier de styles : à propos des styles : https://goo.gl/jTkmZA
            styleUrls: ['app/styles/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map