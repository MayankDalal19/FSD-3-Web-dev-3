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
// db.Students2.find({$or:[{city:"GGN"},{age:{$lt:21}}]})
// db.Students2.find({},{name:1,sem:1,_id:0})  // jo 0=> vo show nhi hoga, 
//sirf 1 wala shoe hoga

// db.Students2.find().sort({age:1}) // 1 = ascending order , -1 = descending order

// db.Students2.find().limit(2) // top 2 data


// db.Students2.find().skip(1).limit(2) // skips top 1 data

// sem 3 or course btech descending order
//  by marks and limit it to 2 with skipping 1 value
db.Students2.find({$or:[{sem:3},{course:"Btech"}]}).sort({age:1}).skip(1).limit(2)