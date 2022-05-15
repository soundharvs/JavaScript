var name = "Soundhar";

console.log("Line number 3 ",name);

function sayName(){
    //var name = "Mr.Soundhar"
    console.log("Line number 7 ",name);
    sayNameTwo();

    function sayNameTwo(){
        //var name = "Soundhar V"
        console.log("Line number 12 ",name);
    }
}

sayName();
