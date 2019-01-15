const cp = require('child_process');

const myInterval = setInterval(() => console.log('I am not blocked'), 1000);

setTimeout(() => clearInterval(myInterval),10000)
