//Falsy Values:
// undefined
// null
// 0
// ''
// NaN

var user = null;

if (user) {
    console.log("Condition is true");
}

if (2 == "2"){
    console.log("same");
}

if (2 === "2"){
    console.log("Same");
} else{
    console.log("Not equal");
}