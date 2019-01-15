const callstack = [];
const notSoHeavyDo = times => {
  let count = 0;
  for (let i = 0; i < times; i++) {
    if (
      Math.round(
        Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))
      ) === 1
    )
      count++;
  }
  return count;
};

const heavyDo = call => {
  let nb = 1e8,
    buckets = 100,
    num = 0;
  for (let i = 0; i < buckets; i++) {
    callstack.push(() => {
      return notSoHeavyDo(nb / buckets);
    });
  }
  task(num, call);
};

const task = (num, call) => {
  const subprocess = callstack.shift();
  num = num + subprocess();
  setImmediate(() => {
    if (callstack.length != 0) {
      task(num, call);
    } else {
      call(num);
    }
  });
};

const myInterval = setInterval(() => console.log('I am not blocked'), 1000);
setTimeout(() => clearInterval(myInterval), 10000);
heavyDo(counts => console.log(counts));
