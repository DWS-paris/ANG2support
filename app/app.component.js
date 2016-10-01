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
// Importer la config : à propos du fichier de configuration https://goo.gl/uMHHY1
var config_1 = require('./config');
// Importer le model de données dans le composant : à propos des models https://goo.gl/DsFwMk
var student_item_1 = require("./models/student.item");
var AppComponent = (function () {
    function AppComponent() {
        // Utilisation des constantes
        this.title = config_1.Config.APP_TITLE;
        this.text = config_1.Config.APP_SS_TITLE;
        this.state = config_1.Config.STATE;
        this.resetInput();
        // Définition d'une collection de données utilisant le model/constructor
        this.studentsList = [
            new student_item_1.StudentItem({ id: 0, firstName: 'Pierre', lastName: 'Stone', state: 2 }),
            new student_item_1.StudentItem({ id: 1, firstName: 'Sophie', lastName: 'Bourdon', state: 3 }),
            new student_item_1.StudentItem({ id: 2, firstName: 'Jacques', lastName: 'Rakchy', state: 2 }),
            new student_item_1.StudentItem({ id: 3, firstName: 'Julie', lastName: 'Bicoule', state: 1 }),
            new student_item_1.StudentItem({ id: 4, firstName: 'Charles', lastName: 'Violon', state: 1 }),
            new student_item_1.StudentItem({ id: 5, firstName: 'Claire', lastName: 'Obscure', state: 1 }),
        ];
    }
    AppComponent.prototype.onSelect = function (student) {
        this.selectedStudent = student;
    };
    ;
    AppComponent.prototype.addNewStudent = function () {
        this.studentsList.push(this.newStudent);
        this.resetInput();
    };
    ;
    AppComponent.prototype.resetInput = function () {
        this.newStudent = { id: 0, firstName: '', lastName: '', state: 1 };
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/partials/app.component.html',
            styleUrls: ['app/styles/app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map