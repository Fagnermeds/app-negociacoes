//import { InvalidDateException } from './InvalidDateException.js';

class DateFormat{
    
    constructor(){
        throw new Error("This class cannot be instatiated!");
    }

    static toText(date){
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static toDate(text){
       
        if(!/\d{2}\/\d{2}\/\d{4}/.test(text))
        {
            throw new InvalidDateException();
        }
        return new Date(...text.split('/')
            .reverse()
            .map((item,index) => 
                item - index % 2
            ));
    }
}