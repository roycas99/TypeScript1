// interface Declaration

interface IsPerson {
    name:string,
    speak(a:string): void
}

// use the interface

const me:IsPerson = {
    name: 'Ali',
    speak(lan:string): void {
        console.log(`speaks ${lan}`);
        
    }
}

// call it
console.log(me);

// use Interfereance as parameter in func

const sayPerson = (someone: IsPerson) => {
    console.log(someone.name);
    
}
sayPerson(me);