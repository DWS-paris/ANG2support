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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
// Import de la class du routing : à propos des routes https://goo.gl/FbKYVx
var app_routing_1 = require('./app.routing');
// Import du service pour les routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
var students_service_1 = require('./services/students.service');
var app_component_1 = require('./app.component');
var edit_student_component_1 = require('./components/edit.student.component');
var dashboard_component_1 = require('./components/dashboard.component');
var student_details_component_1 = require('./components/student.details.component');
var add_student_directive_1 = require("./directives/add.student.directive");
var edit_student_directive_1 = require("./directives/edit.student.directive");
var student_details_directive_1 = require("./directives/student.details.directive");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.Router],
            declarations: [app_component_1.AppComponent, edit_student_component_1.EditStudentComponent, dashboard_component_1.DashboardComponent, student_details_component_1.StudentDetailsComponent, add_student_directive_1.AddStudentDirective, edit_student_directive_1.EditStudentDirective, student_details_directive_1.StudentDirective],
            // Ajout du provider pour les routes dynamiques
            providers: [students_service_1.StudentService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map