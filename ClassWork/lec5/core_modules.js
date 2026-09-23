// const fs=require("fs")
// const os=require('os');
// const path = require('path');
// const dns=require("dns");
// const { hostname } = require("os");
// const crypto= require("crypto")
const process= require("process")


// console.log(os.tmpdir());
// // console.log(os.tmpdir());



// // const filePath=path.resolve("lec3","core_modules.js");
// // const filePath=path.join(__dirname,"core_modules.js");
// // console.log(filePath)

// const filePath="WEBDEV3/lec5/core_modules.js";
// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));
// console.log("A");

// const { log } = require("console");


// 1. Read file

// const data = fs.readFileSync("./sample.txt","utf-8")//synchronous
// console.log(data);

// we only need utf-8 for reading only no need to write that for write

// fs.readFile("./sample.txt","utf-8",(err,data)=>{  // asynchronous

//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log(data);
        
//     }

// })


// 2. weite file

// fs.writeFileSync("./sample.txt","hum toh cheetee haiii !");

// fs.writeFile("./sample.txt","firsee aagyee humm !",(err)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("File created");
        
//     }
// })



// 3. Append file

// fs.appendFileSync("./sample.txt","hihihihihihi😁😁")

// fs.appendFile("./sample.txt","\nhihihihihihi😁😁",(err)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("File modified");
        
//     }
// })



// 4. Unlink file / Delete file 

// fs.unlink("./sample.txt",(err)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("File Deleted");
        
//     }
// })

// console.log("B");





//  Cryptoo -- hashing password

// const password="Alex@1234"

// // same hash code generated
// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash);

// // random bytes
// const salt=crypto.randomBytes(16).toString("hex");
// console.log(salt);

// // generates random hash
// const saltedHash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(saltedHash);

// const vid=crypto.randomUUID()
// console.log(vid);







// DNS 
// dns.lookup('www.google.com',(err,address,family)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log(address);
//         console.log(family);
        
        
//     }
// })

// dns.reverse('8.8.8.8',(err,hostnames)=>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log(hostnames);
        
//     }
// })



//  Processs

const data=process.argv
console.log(Number(data[2])+Number(data[3]));
// node .\core_modules.js hello cheete hahaha --- o/p = hello cheete hahaha

// console.log(process.version);
// console.log(process.platform);
// console.log(process.pid);
// console.log(process.cwd());




