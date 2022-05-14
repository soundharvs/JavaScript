tipper("80");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

//bigTipper("200");

var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 15);
};

/*
Output:
TypeError: bigTipper is not a function
    at Object.<anonymous> (C:\Users\win 10\Desktop\Internship training\JS\03Intermediate\04Hoisting.js:8:1)
    at Module._compile (node:internal/modules/cjs/loader:1099:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/ 

 bigTipper("200");
//Output: 215

console.log(name);//Output: undefined
var name = "Soundhar";

function sayName(){
    var name = "Mr.Soundhar";
    console.log(name);
}

sayName();

console.log(name);