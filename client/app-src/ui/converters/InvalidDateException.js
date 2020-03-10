//import { ApplicationException } from '../../util/ApplicationException.js';

class InvalidDateException extends ApplicationException{
    constructor(){
        super('A data estar no formato aa/mm/aaaa válido!');
    }
}