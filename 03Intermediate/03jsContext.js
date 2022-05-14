// sayHello();

// function sayHello(){
//     console.log("Hello World");
// }

if(2 === 2){
    console.log("This is true");
}

var myName = "Soundhar";
if (myName === myName) {
    console.log("This is again a true");
}

if (myName === window.myName) {
    console.log("True?");
}
/*
Output in node :
ReferenceError: window is not defined
    at Object.<anonymous> (C:\Users\win 10\Desktop\Internship training\JS\03Intermediate\03jsContext.js:16:16)
    at Module._compile (node:internal/modules/cjs/loader:1099:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/

// Browser console:
if(myName === window.myName){console.log("This is True");}
//Output
//VM455:1 This is True