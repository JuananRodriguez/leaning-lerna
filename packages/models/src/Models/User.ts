import UserInterface from '../Interfaces/User';
import UserConstraints from '../Constraints/User';
import { validate } from "validate.js";

export default class User implements UserInterface {
    _id: string;
    name: string;
    surname: string;
    email: string;
    telephone: string;
    exclude: string[];

    constructor() {
        this._id = '';
        this.name = "string tonto";
        this.surname = "string tonto";
        this.email = "string tonto";
        this.telephone = "string tonto";

        this.exclude = ['exclude', 'validate', 'getData'];
    }

    validate = () => {
        return validate(this.getData(), UserConstraints);
    };

    getData = () =>{
        const obj : { [index: string]: any } = {};
        const instance : { [index: string]: any } = this;

        Object.keys(this).map(key=>{
            if(!this.exclude.includes(key))
                obj[key] = instance[key]
        });

        return obj;
    };
}