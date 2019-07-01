import TestFace from '../Interfaces/test';

export default class Test implements TestFace {
    name: string;
    surname: string;

    constructor(){
        this.name = 'something';
        this.surname = 'more';
    }
}