// Création d'un model de données : à propos des models https://goo.gl/DsFwMk
export class StudentItem {
    public id: number;
    public firstName: string;
    public lastName: string;
    public state: number;

    constructor(data: any){
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.state = data.state;
    }
}