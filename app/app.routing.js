"use strict";
var router_1 = require('@angular/router');
var edit_student_component_1 = require('./components/edit.student.component');
var dashboard_component_1 = require('./components/dashboard.component');
var student_details_component_1 = require('./components/student.details.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'edit',
        component: edit_student_component_1.EditStudentComponent
    },
    // Définition d'un paramêtre ID dans la route : à propos des routes dynamiques https://goo.gl/Qe53YN
    {
        path: 'detail/:id',
        component: student_details_component_1.StudentDetailsComponent
    }
];
exports.Router = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map