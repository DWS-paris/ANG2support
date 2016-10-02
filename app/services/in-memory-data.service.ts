// Gérénation d'une API "in memory" : à propos du service HTTP https://goo.gl/S6imGs
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { StudentItem } from "../models/student.item";

// Export de l'API "in memory"
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
    
    // Cette variable définie le contenu de l'API et son adresse
    let studentsDb = [
        new StudentItem({id: 1, firstName: 'Pierre', lastName: 'Stone', state: 2}),
        new StudentItem({id: 2, firstName: 'Sophie', lastName: 'Bourdon', state: 3}),
        new StudentItem({id: 3, firstName: 'Jacques', lastName: 'Rakchy', state: 2}),
        new StudentItem({id: 4, firstName: 'Julie', lastName: 'Bicoule', state: 1}),
        new StudentItem({id: 5, firstName: 'Charles', lastName: 'Violon', state: 1}),
        new StudentItem({id: 6, firstName: 'Claire', lastName: 'Obscure', state: 1}),
    ];

    return {studentsDb};
  }
}
