console.log(this);//output: {}

// var user = {
//     firstName: "Soundhar",
//     courseCount: 4,
//     getCourseCount: function(){
//         console.log("Line 7", this);
//     }
// };

// user.getCourseCount();
/*
Line 7 {
  firstName: 'Soundhar',
  courseCount: 4,
  getCourseCount: [Function: getCourseCount]
}
*/

var user = {
    firstName: "Soundhar",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 24", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 27", this);
        }
        sayHello();
    }
};

user.getCourseCount();
/*
OUTPUT:
Line 27 <ref *1> Object [global] {
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
      duration: 51.22450000047684,
      nodeStart: 0.6616999506950378,
      v8Start: 2.2060999870300293,
      bootstrapComplete: 35.89659994840622,
      environment: 16.314099967479706,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1652892448838.994
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone]
}
*/

//For all regular function calls this points to windows object