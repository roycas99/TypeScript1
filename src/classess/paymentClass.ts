import {HasFormat} from '../interfaces/hasFormat.js' 


export class Payment implements HasFormat{
    // variables
    // public  client: string;
    // readonly details: string;
    // private amount: number;  // private you cant access outside the class


// constructor 

constructor(
    
    public recipient: string,
     readonly details: string,
     private amount: number,
)
{}

// methods

format(){
    return `${this.recipient} is owed $ ${this.amount} for ${this.details}`;
}

}