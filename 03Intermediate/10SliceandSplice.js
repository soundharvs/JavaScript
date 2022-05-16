var users = ["Ted","Tim","Ton","Sam","Sor","Sod"];

//console.log(users.slice(1,4));//output : [ 'Tim', 'Ton', 'Sam' ]

//console.log(users.slice(1));//output: [ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ]

// users.splice(1,2,"Hi");
//console.log(users);//ouput: [ 'Ted', 'Hi', 'Sam', 'Sor', 'Sod' ]

// users.splice(1,4,"Hi");
// console.log(users);//ouput: [ 'Ted', 'Hi', 'Sod' ]

users.splice(1,4,"Hi","Sou");
console.log(users);//output: [ 'Ted', 'Hi', 'Sou', 'Sod' ]