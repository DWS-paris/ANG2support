"use strict";
// Création d'un model de données : à propos des models https://goo.gl/DsFwMk
var StudentItem = (function () {
    function StudentItem(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.state = data.state;
    }
    return StudentItem;
}());
exports.StudentItem = StudentItem;
//# sourceMappingURL=student.item.js.map