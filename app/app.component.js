// A propos des composants : https://goo.gl/2jsnYz
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importer la class Component pour créer un composant
var core_1 = require('@angular/core');
// Création du Component
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            // Définition du selector
            selector: 'my-app',
            // Définition du template du Component
            // Pour écrire en milti-ligne il faut utiliser l'apostrophe inversée : `
            template: "\n        <h1>Student Platform</h1>\n        <h2>Hello Angular2</h2>\n    ",
            // Définition des styles du Component
            // Pour écrire en milti-ligne il faut utiliser l'apostrophe inversée : `
            styles: ["\n        h1 {color: red}\n        h2 {text-transform: uppercase; font-size:1rem}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map