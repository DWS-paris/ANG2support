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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var students_service_1 = require('../services/students.service');
var config_1 = require('../config');
var student_item_1 = require("../models/student.item");
var StudentDetailsComponent = (function () {
    function StudentDetailsComponent(studentService, route, location) {
        this.studentService = studentService;
        this.route = route;
        this.location = location;
        this.edit = config_1.Config.EDIT;
        this.deleteBtn = config_1.Config.DELETE_BTN;
        this.firstName = config_1.Config.FIRSTNAME;
        this.lastName = config_1.Config.LASTNAME;
        this.saveBtn = config_1.Config.SAVE;
        this.backBtn = config_1.Config.BACK;
        this.studentsList = [];
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.studentService.getStudent(id).then(function (singleStudent) { return _this.singleStudent = singleStudent; });
        });
    };
    ;
    StudentDetailsComponent.prototype.save = function () {
        var _this = this;
        this.studentService.update(this.singleStudent)
            .then(function () { return _this.goBack(); });
    };
    // Création d'une fonction pour supprimer une entrée : à propos du service HTTP https://goo.gl/S6imGs
    StudentDetailsComponent.prototype.delete = function (studentId) {
        var _this = this;
        // Selection du service
        this.studentService
            .delete(studentId)
            .then(function () {
            _this.studentsList = _this.studentsList.filter(function (h) { return h != studentId; });
            if (_this.singleStudent.id == studentId) {
                _this.singleStudent = null;
            }
            _this.location.back();
        });
    };
    StudentDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_item_1.StudentItem)
    ], StudentDetailsComponent.prototype, "newStudent", void 0);
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