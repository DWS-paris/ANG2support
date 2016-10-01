// Création d'un model de données : à propos des models https://goo.gl/DsFwMk
export class StudentItem {
    // Création de la variable
    public id: number;
    public firstName: string;
    public lastName: string;
    public state: number;

    // Création du constructeur
    constructor(data: any){
        // Définition de la variable
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.state = data.state;
    }
}