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
var config_1 = require('./config');
// Import du service dans l'application : à propos des services https://goo.gl/uz1cpM
var students_service_1 = require("./services/students.service");
var AppComponent = (function () {
    // Ajout du service dans le constructor
    function AppComponent(studentService) {
        this.studentService = studentService;
        this.title = config_1.Config.APP_TITLE;
        this.text = config_1.Config.APP_SS_TITLE;
        this.state = config_1.Config.STATE;
        this.resetInput();
        // Création de la liste en appelant la fonction du service
        this.studentsList = this.studentService.getStudents();
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
            // Configuration du provider pour utiliser le service
            providers: [students_service_1.StudentService],
        }), 
        __metadata('design:paramtypes', [students_service_1.StudentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map