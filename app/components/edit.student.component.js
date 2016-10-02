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
var students_service_1 = require("../services/students.service");
var EditStudentComponent = (function () {
    function EditStudentComponent(studentService) {
        this.studentService = studentService;
    }
    ;
    EditStudentComponent.prototype.onSelect = function (student) {
        this.selectedStudent = student;
    };
    ;
    // Création d'un fonction pour ajouter une entrée dans l'API
    EditStudentComponent.prototype.addNewStudent = function (newStudent) {
        var _this = this;
        // Vérification de la variable à ajouter
        if (!newStudent) {
            return;
        }
        // Appel de la fonction create() du service
        this.studentService.create(this.newStudent)
            .then(function (newStudent) {
            _this.studentsList.push(_this.newStudent);
            _this.resetInput();
        });
    };
    EditStudentComponent.prototype.resetInput = function () {
        this.newStudent = { id: 0, firstName: '', lastName: '', state: 1 };
    };
    EditStudentComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents().then(function (students) { return _this.studentsList = students; });
    };
    EditStudentComponent.prototype.ngOnInit = function () {
        this.getStudents();
        this.resetInput();
    };
    EditStudentComponent = __decorate([
        core_1.Component({
            selector: 'edit-student-page',
            templateUrl: 'app/partials/components/edit.student.component.html',
            providers: [students_service_1.StudentService],
        }), 
        __metadata('design:paramtypes', [students_service_1.StudentService])
    ], EditStudentComponent);
    return EditStudentComponent;
}());
exports.EditStudentComponent = EditStudentComponent;
//# sourceMappingURL=edit.student.component.js.map