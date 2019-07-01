import Family from './Family';
import Subfamily from './Subfamily';
import User from './User';
import Images from './Images';
import { Zone } from '../Enums/Zone';
import { Status } from '../Enums/Status';

export default interface Incident {
    _id: number
    family: Family["_id"]
    subfamily: Subfamily["_id"]
    zone: Zone
    user: User["_id"]
    status: Status
    validated: boolean
    presenterName: User['name']
    presenterSurname: User['surname']
    presenterEmail: User['email']
    presenterTelephone: User['telephone']
    description: string
    city: string
    number: string
    street: string
    zipCode: number
    coords: number[]
    images: Images
    creDate: number,
    modDate: number
}