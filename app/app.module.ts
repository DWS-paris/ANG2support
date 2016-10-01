import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Import de la class du routing : à propos des routes https://goo.gl/FbKYVx
import { Router } from './app.routing';

import { AppComponent }  from './app.component';
import { EditStudentComponent } from './components/edit.student.component';
import { DashboardComponent } from './components/dashboard.component';

import { AddStudentDirective } from "./directives/add.student.directive";
import { EditStudentDirective } from "./directives/edit.student.directive";
import { StudentDirective } from "./directives/student.details.directive";

@NgModule({
  // Import des routes dans l'application
  imports: [ BrowserModule, FormsModule, Router ],

  declarations: [ AppComponent, EditStudentComponent, DashboardComponent, AddStudentDirective, EditStudentDirective, StudentDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
