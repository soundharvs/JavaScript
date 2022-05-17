var student = {
    firstName: "Soundhar",
    lastName : "V",
    dept : "CSE",
    regNo : 51
};

// console.log(student.firstName);//output: Soundhar
// console.log(student["dept"]);//output: CSE

// console.log(student);//output: { firstName: 'Soundhar', lastName: 'V', dept: 'CSE', regNo: 51 }

// console.table(student);
/*
┌───────────┬────────────┐
│  (index)  │   Values   │
├───────────┼────────────┤
│ firstName │ 'Soundhar' │
│ lastName  │    'V'     │
│   dept    │   'CSE'    │
│   regNo   │     51     │
└───────────┴────────────┘
*/

//Assignment:

var mobile = {
    model : "IPhone 13 Pro",
    price : 180000,
    year  : 2022,
    camera : "13 Megapixels Tri-Camera",
    battery : "Inbuilt",
    warranty : "1 Year"
};

console.table(mobile);

/*
┌──────────┬────────────────────────────┐
│ (index)  │           Values           │
├──────────┼────────────────────────────┤
│  model   │      'IPhone 13 Pro'       │
│  price   │           180000           │
│   year   │            2022            │
│  camera  │ '13 Megapixels Tri-Camera' │
│ battery  │         'Inbuilt'          │
│ warranty │          '1 Year'          │
└──────────┴────────────────────────────┘
*/