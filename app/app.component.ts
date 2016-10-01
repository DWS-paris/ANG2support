// A propos des composants : https://goo.gl/2jsnYz

// Importer la class Component pour créer un composant
import { Component } from '@angular/core';

// Création du Component
@Component({
    // Définition du selector
    selector: 'my-app',

    // Définition du template du Component
    // Pour écrire en milti-ligne il faut utiliser l'apostrophe inversée : `
    template: `
        <h1>Student Platform</h1>
        <h2>Hello Angular2</h2>
    `,

    // Définition des styles du Component
    // Pour écrire en milti-ligne il faut utiliser l'apostrophe inversée : `
    styles: [`
        h1 {color: red}
        h2 {text-transform: uppercase; font-size:1rem}
    `]
})

// Exporter la class du Component
export class AppComponent { }
