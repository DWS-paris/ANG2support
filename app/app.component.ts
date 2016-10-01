import { Component } from '@angular/core';

@Component({
    selector: 'my-app',

    // Créer un fichier de template : à propos des templates https://goo.gl/7xYY66
    templateUrl: 'app/partials/app.component.html',

    // Créer un fichier de styles : à propos des styles : https://goo.gl/jTkmZA
    styleUrls: ['app/styles/app.component.css']
})

// Exporter la class du Component
export class AppComponent {

    // Envoyer des variables dans la vue : à propos des variables https://goo.gl/UGMdDh
    private title = 'Student Platform';
    private text = 'Hello Angular2';
 }