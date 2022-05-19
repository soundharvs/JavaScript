const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).background);//output: rgb(228, 66, 54) none repeat scroll 0% 0% / auto padding-box border-box

// console.log(window.getComputedStyle(red).backgroundColor);//output: rgb(228, 66, 54)

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(pink));//output: rgb(187, 44, 217)

// console.log(getBGColor(orange));//output: rgb(234, 119, 115)

// var color =getBGColor(pink);

// pink.addEventListener("mouseenter",() =>{
//     center.style.background = color;
// });

const magicColorChanger = (element , color) => {
    return element.addEventListener("mouseenter",() =>{
        center.style.background = color;
    });
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(pink, getBGColor(pink));