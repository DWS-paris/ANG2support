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
var core_1 = require("@angular/core");
// Import des class pour configurer des routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var students_service_1 = require('../services/students.service');
var config_1 = require('../config');
var StudentDetailsComponent = (function () {
    // Ajout du service et des routes dans le composant
    function StudentDetailsComponent(studentService, route, location) {
        this.studentService = studentService;
        this.route = route;
        this.location = location;
        this.edit = config_1.Config.EDIT;
        this.firstName = config_1.Config.FIRSTNAME;
        this.lastName = config_1.Config.LASTNAME;
        this.back = config_1.Config.BACK;
    }
    // Création d'un fonction applée au chargelent du composant
    StudentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Récupération du maramêtre de la route dynamique
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            // Appel de la fonction du service pour afficher la vue de la route dynamique
            _this.studentService.getStudent(id).then(function (singleStudent) { return _this.singleStudent = singleStudent; });
        });
    };
    // Création d'une fontction pour revenir en arrière
    StudentDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    StudentDetailsComponent = __decorate([
        core_1.Component({
            selector: 'student-detail',
            templateUrl: 'app/partials/components/student.details.component.html',
        }), 
        __metadata('design:paramtypes', [students_service_1.StudentService, router_1.ActivatedRoute, common_1.Location])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());
exports.StudentDetailsComponent = StudentDetailsComponent;
//# sourceMappingURL=student.details.component.js.map