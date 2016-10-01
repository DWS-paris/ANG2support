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
var AppComponent = (function () {
    // Création d'un constructor pour envoyer un tableau de données dans la vue
    function AppComponent() {
        this.title = 'Student Platform';
        this.text = 'Liste des étudiants';
        this.state1 = 'Etudiant présent';
        this.state2 = 'Etudiant en retard';
        this.state3 = 'Etudiant absent';
        // Création du jeu de données
        this.studentsList = [
            { id: 0, firstName: 'Pierre', lastName: 'Stone', state: 2 },
            { id: 1, firstName: 'Sophie', lastName: 'Bourdon', state: 3 },
            { id: 2, firstName: 'Jacques', lastName: 'Rakchy', state: 2 },
            { id: 3, firstName: 'Julie', lastName: 'Bicoule', state: 1 },
            { id: 4, firstName: 'Charles', lastName: 'Violon', state: 1 },
            { id: 5, firstName: 'Claire', lastName: 'Obscure', state: 1 },
        ];
    }
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/partials/app.component.html',
            styleUrls: ['app/styles/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map