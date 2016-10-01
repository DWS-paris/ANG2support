import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

// Import de la directive : à propos des directives https://goo.gl/fGh7QS 
import { AddStudentDirective } from "./directives/add.student.directive";
import { StudentDirective } from "./directives/student.details.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule ],

  // Ajout de la directive dans le tableau des déclarations
  declarations: [ AppComponent, AddStudentDirective, StudentDirective ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
