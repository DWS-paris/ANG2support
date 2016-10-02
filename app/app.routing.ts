// Création des routes : à propos des routes https://goo.gl/FbKYVx
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditStudentComponent }  from './components/edit.student.component';
import { DashboardComponent }  from './components/dashboard.component';
import { StudentDetailsComponent }  from './components/student.details.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'edit',
    component: EditStudentComponent
  },

  // Définition d'un paramêtre ID dans la route : à propos des routes dynamiques https://goo.gl/Qe53YN
  {
    path: 'detail/:id',
    component: StudentDetailsComponent
  }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);