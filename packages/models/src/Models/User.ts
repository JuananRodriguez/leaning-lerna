import UserInterface from '../Interfaces/User';

export default class User implements UserInterface {
    _id: string;
    name: string;
    surname: string;
    email: string;
    telephone: string;

    constructor() {
        this._id = "354554";
        this.name = "string tonto";
        this.surname = "string tonto";
        this.email = "string tonto";
        this.telephone = "string tonto";
    }
}