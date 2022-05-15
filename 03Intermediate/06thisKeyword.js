console.log(this);//output: {}, browser : Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

var game = "Cricket";

function sayName(){
    var name = "Soundhar";
    console.log(this);
}

sayName();

/*
node output:
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 47.075100004673004,
      nodeStart: 0.6488000005483627,
      v8Start: 2.0648999959230423,
      bootstrapComplete: 34.3597000092268,
      environment: 16.061200007796288,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1652595884266.791
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone]
}

browser output:
Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
*/