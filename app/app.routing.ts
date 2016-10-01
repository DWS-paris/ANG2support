// Création des routes : à propos des routes https://goo.gl/FbKYVx
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import des composants utilisés dans les routes
import { EditStudentComponent }  from './components/edit.student.component';
import { DashboardComponent }  from './components/dashboard.component';

const appRoutes: Routes = [
  // Définition d'une route
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
  }
];

// Export de la class du module de routing
export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);