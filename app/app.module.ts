import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Import de la class du routing : à propos des routes https://goo.gl/FbKYVx
import { Router } from './app.routing';

// Import du service pour les routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
import { StudentService } from './services/students.service';

import { AppComponent }  from './app.component';
import { EditStudentComponent } from './components/edit.student.component';
import { DashboardComponent } from './components/dashboard.component';
import { StudentDetailsComponent }  from './components/student.details.component';

import { AddStudentDirective } from "./directives/add.student.directive";
import { EditStudentDirective } from "./directives/edit.student.directive";
import { StudentDirective } from "./directives/student.details.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule, Router ],
  declarations: [ AppComponent, EditStudentComponent, DashboardComponent, StudentDetailsComponent, AddStudentDirective, EditStudentDirective, StudentDirective ],
  
  // Ajout du provider pour les routes dynamiques
  providers: [ StudentService ],
  
  bootstrap: [ AppComponent ]
})

export class AppModule { }
