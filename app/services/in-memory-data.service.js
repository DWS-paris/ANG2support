"use strict";
var student_item_1 = require("../models/student.item");
// Export de l'API "in memory"
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        // Cette variable définie le contenu de l'API et son adresse
        var studentsDb = [
            new student_item_1.StudentItem({ id: 1, firstName: 'Pierre', lastName: 'Stone', state: 2 }),
            new student_item_1.StudentItem({ id: 2, firstName: 'Sophie', lastName: 'Bourdon', state: 3 }),
            new student_item_1.StudentItem({ id: 3, firstName: 'Jacques', lastName: 'Rakchy', state: 2 }),
            new student_item_1.StudentItem({ id: 4, firstName: 'Julie', lastName: 'Bicoule', state: 1 }),
            new student_item_1.StudentItem({ id: 5, firstName: 'Charles', lastName: 'Violon', state: 1 }),
            new student_item_1.StudentItem({ id: 6, firstName: 'Claire', lastName: 'Obscure', state: 1 }),
        ];
        return { studentsDb: studentsDb };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map