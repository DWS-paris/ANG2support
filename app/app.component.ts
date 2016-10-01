import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    styleUrls: ['app/styles/app.component.css']
})

export class Hero {
  id: number;
  name: string;
}


export class AppComponent {
    private title = 'Student Platform';
    private text = 'Liste des étudiants';
    private state1 = 'Etudiant présent';
    private state2 = 'Etudiant en retard';
    private state3 = 'Etudiant absent';

    private hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
 }