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
// Création d'une directive : à propos des directives https://goo.gl/fGh7QS 
var core_1 = require("@angular/core");
var config_1 = require('../config');
var student_item_1 = require("../models/student.item");
var EditStudentDirective = (function () {
    function EditStudentDirective() {
        this.edit = config_1.Config.EDIT;
        this.deleteBtn = config_1.Config.DELETE_BTN;
        this.firstName = config_1.Config.FIRSTNAME;
        this.lastName = config_1.Config.LASTNAME;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_item_1.StudentItem)
    ], EditStudentDirective.prototype, "selectedStudent", void 0);
    EditStudentDirective = __decorate([
        core_1.Component({
            selector: 'edit-student',
            templateUrl: 'app/partials/directives/edit.student.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], EditStudentDirective);
    return EditStudentDirective;
}());
exports.EditStudentDirective = EditStudentDirective;
//# sourceMappingURL=edit.student.directive.js.map