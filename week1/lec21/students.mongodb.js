use("CollegeDB");

// db.createCollection("students")



// create

// db.students.insertOne(
//     {rollNo:1,name:"Mayank",section:"A",marks:9.8}
// )

// db.students.insertMany([
//     {rollNo:2,name:"Daksh",section:"A",marks:9.2},
//     {rollNo:3,name:"Ansh",section:"A",marks:9.4},
//     {rollNo:4,name:"Bansal",section:"A",marks:9.6},
// ])

// db.students.insert([
//     {rollNo:5,name:"Jeet",section:"A",marks:8.2},
//     {rollNo:6,name:"krish",section:"A",marks:8.4},
//     {rollNo:7,name:"Arth",section:"A",marks:8.6},
// ])




// read

// db.students.findOne();// returns First one document
//from the collection

db.students.find();
