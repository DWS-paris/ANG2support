"use strict";
var router_1 = require('@angular/router');
// Import des composants utilisés dans les routes
var edit_student_component_1 = require('./components/edit.student.component');
var dashboard_component_1 = require('./components/dashboard.component');
var appRoutes = [
    // Définition d'une route
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
    }
];
// Export de la class du module de routing
exports.Router = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map