// var num1 = 7;
// var num2 = 6;
// console.log(num1 + num2);
// console.log(num1 * num2);

// var answer = num1 > num2;
// console.log(answer);

//Discount percent

var listingPrice = 799;
var sellingPrice = 199;

var discountPercent =((listingPrice - sellingPrice)/listingPrice)*100;

console.log("Discount Percent is : " + discountPercent);

displayDiscountPercent = Math.round(discountPercent);
console.log(displayDiscountPercent + "% off");