import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Router } from './app.routing';
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
  providers: [ StudentService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
