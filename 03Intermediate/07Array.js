var countries = ["India", "USA", "Japan", "Russia", "UK"];

var states = new Array("Tamil Nadu", "Maharashtra", "Karnataka", "Kerala");

//console.log(states[0]);

//console.log(states.length);

states[1] = "Telengana";
//console.log(states);

var soundhar = ["Soundhar", 962318104051, "CSE", "Hosteller", "tirunelveli"];
//console.log(soundhar);

soundhar.pop();//removes last element 
//console.log(soundhar);

soundhar.unshift("Mr.");//adds the element to first and shifts the others to next index
//console.log(soundhar);

soundhar.shift();//removes first and shifts rest
//console.log(soundhar);
//console.log(soundhar.indexOf("CSE"));

console.log(Array.from("SOUNDHAR"));