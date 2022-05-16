var testArray = [2,3,4,5,6,1,8,9];

//console.log(testArray.fill("S",2,5));//output:[2, 3, 'S', 'S','S', 1, 8, 9]

const myNumber = [22,33,44,55,66,77,88,98];

//const result = myNumber.filter((num) => (num != 55));
//console.log(result);//output: [22, 33, 44, 66, 77, 88, 98]

// const result = myNumber.filter((num) => (num < 55));
// console.log(result);//ouput: [ 22, 33, 44 ]

const result = myNumber.filter((num) => (num > 55));
console.log(result);//output: [ 66, 77, 88, 98 ]