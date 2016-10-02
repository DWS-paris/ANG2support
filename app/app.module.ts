import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Importer du modul HttpModul : à propos du service HTTP https://goo.gl/S6imGs
import { HttpModule }    from '@angular/http';

// Gérénation d'une API "in memory"
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }  from './app.component';
import { EditStudentComponent } from './components/edit.student.component';
import { DashboardComponent } from './components/dashboard.component';
import { StudentDetailsComponent }  from './components/student.details.component';
import { AddStudentDirective } from "./directives/add.student.directive";
import { EditStudentDirective } from "./directives/edit.student.directive";
import { StudentDirective } from "./directives/student.details.directive";

import { StudentService } from './services/students.service';
import { Router } from './app.routing';

@NgModule({

  // Ajout du service HTTP et InMemoryWebApiModule
  imports: [ BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), Router ],

  declarations: [ AppComponent, EditStudentComponent, DashboardComponent, StudentDetailsComponent, AddStudentDirective, EditStudentDirective, StudentDirective ],
  providers: [ StudentService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
