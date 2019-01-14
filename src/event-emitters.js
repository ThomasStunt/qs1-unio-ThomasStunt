const EventEmitter = require('events');  
const myEmitter = new EventEmitter();

const john = 'John';  
const arya = 'Arya';  
const sensa = 'Sensa';  
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');  
const aryaSay = say(arya);  
const sensaSay = say(sensa);

var first = true;

myEmitter.on('north', () => {
    sensaSay('For the North')
    if(first) {
        johnSay('Winter is coming')
        first = false;
    }
    myEmitter.emit('arya');
});

myEmitter.on('arya', () => {
    aryaSay('The king in the North')
});

const interval = setInterval( () => {myEmitter.emit('north');}, 1000);
setTimeout(() => clearInterval(interval),5000)