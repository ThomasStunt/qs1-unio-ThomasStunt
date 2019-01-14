const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

let called = true;
const intervalObj = setInterval(() => {
  Promise.all([
    sensaSay("For the North").then(value => {
      console.log(value);
    }),
    aryaSay('The king in the North').then(value => {
      console.log(value);
    }),
    new Promise((resolve, reject) => {
      if(called) {
        called = false;
        johnSay("Winter is coming").then(value => {
          console.log(value);
        });
      }
      resolve();
    })
  ])
  setTimeout(() => clearInterval(intervalObj), 10000);
}, 1000);
