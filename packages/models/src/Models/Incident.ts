import IncidentInterface from '../Interfaces/Incident';
import Images from '../Interfaces/Images';
import { Zone } from '../Enums/Zone';
import {Status} from "../Enums/Status";

export default class Incident implements IncidentInterface {
    _id: number;
    family: string;
    subfamily: string;
    zone: Zone;
    user: string;
    status: Status;
    validated: boolean;
    presenterName: string;
    presenterSurname: string;
    presenterEmail: string;
    presenterTelephone: string;
    description: string;
    city: string;
    number: string;
    street: string;
    zipCode: number;
    coords: number[];
    images: Images;
    creDate: number;
    modDate: number;

    constructor(){
        this._id = 354554;
        this.family = 'more';
        this.subfamily = 'more';
        this.zone = Zone['SLR'];
        this.user = "asdadassd";
        this.status = Status.close;
        this.validated = false;
        this.presenterName = 'string tonto';
        this.presenterSurname = 'string tonto';
        this.presenterEmail = 'string tonto';
        this.presenterTelephone = 'string tonto';
        this.description = 'string tonto';
        this.city = 'string tonto';
        this.number = 'string tonto';
        this.street = 'string tonto';
        this.zipCode = 41500;
        this.coords = [213,13453];
        this.images = {url:'',creDate:'',uploader:''};
        this.creDate = 53465;
        this.modDate = 44654564;
    }
}