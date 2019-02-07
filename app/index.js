import {Person,SuperPerson} from './person';
const sean = new Person ('Sean');
const superSean = new SuperPerson('Sean', 'walking');

sean.greet();
superSean.greet();
superSean.saySuperpower();