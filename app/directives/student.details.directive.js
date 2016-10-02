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
var StudentDirective = (function () {
    function StudentDirective() {
        this.editBtn = config_1.Config.EDIT_BTN;
        this.state1 = config_1.Config.STATE1;
        this.state2 = config_1.Config.STATE2;
        this.state3 = config_1.Config.STATE3;
        this.sendStudentDetail = new core_1.EventEmitter();
    }
    StudentDirective.prototype.onSelect = function (event) {
        this.sendStudentDetail.emit(this.student);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_item_1.StudentItem)
    ], StudentDirective.prototype, "student", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StudentDirective.prototype, "sendStudentDetail", void 0);
    StudentDirective = __decorate([
        core_1.Component({
            selector: 'student-item',
            templateUrl: 'app/partials/directives/student.details.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], StudentDirective);
    return StudentDirective;
}());
exports.StudentDirective = StudentDirective;
//# sourceMappingURL=student.details.directive.js.map