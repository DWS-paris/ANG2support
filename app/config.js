"use strict";
var Config = (function () {
    function Config() {
    }
    Object.defineProperty(Config, "APP_TITLE", {
        // Création des constantes de l'application
        get: function () { return 'Student Platform'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "APP_SS_TITLE", {
        get: function () { return 'Liste des étudiants'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "EDIT_BTN", {
        get: function () { return 'Modifier'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "DELETE_BTN", {
        get: function () { return 'Supprimer'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "EDIT", {
        get: function () { return 'Editer'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "STATE", {
        get: function () { return 'Etat'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "STATE1", {
        get: function () { return 'Présent'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "STATE2", {
        get: function () { return 'En retard'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "STATE3", {
        get: function () { return 'Absent'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "ADD", {
        get: function () { return 'Ajouter'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "ADD_STUDENT", {
        get: function () { return 'Ajouter un étudiant'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "FIRSTNAME", {
        get: function () { return 'Prénom'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "LASTNAME", {
        get: function () { return 'Nom'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "SAVE", {
        get: function () { return 'Enregistrer'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "BACK", {
        get: function () { return 'Retour'; },
        enumerable: true,
        configurable: true
    });
    ;
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map