use("CollegeDB");

// db.createCollection("Students2");

// db.Students2.insert([
//     {
//         name:"Mayank",
//         age:21,
//         city:"GGN",
//         sem:3,
//         course:"BTech",
//         fees:270000
//     },
//     {
//         name:"Ansh",
//         age:18,
//         city:"GGN",
//         sem:3,
//         course:"BTech",
//         fees:270000
//     },
//     {
//         name:"Daksh",
//         age:18,
//         city:"Rewari",
//         sem:3,
//         course:"BCA",
//         fees:200000
//     }
// ])
// db.Students2.find({city:"GGN"})

// db.Students2.find({age:{$gt:18}})
// db.Students2.find({city:"GGN",age:{$lt:21}})
db.Students2.find({$or:[{city:"GGN"},{age:{$lt:21}}]})
