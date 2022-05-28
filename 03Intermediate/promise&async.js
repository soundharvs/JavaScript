// async function f() {
//     throw new Error("Whoops!");
//   }
//   f();
  /*
  throw new Error("Whoops!");
          ^
Error: Whoops!
  */

let promise = new Promise(function(resolve,reject){
    // resolve("Process is successful");
    reject("Sorry some error occured")
})

// promise.then((value)=>{
//     console.log(value);
// })
// .catch((err)=>{
//     console.log(err);
// })

const getData = async ()=>{
    try{
        const data = await promise;
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

getData();