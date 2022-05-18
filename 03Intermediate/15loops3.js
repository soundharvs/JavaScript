const names = ["Facebook", "Instagram", "Youtube", "Netflix", "Amazon"];

// for (const n of names){
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    nf: "Netflix"
};

// for (const s in symbols){
//     console.log(s);
// }

/*
yt
ig
fb
nf
*/

for (const s in symbols){
    console.log(symbols[s]);
}

/*
Youtube
Instagram
Facebook
Netflix
*/

//for of loop is for arrays whereas for in loop is for objects