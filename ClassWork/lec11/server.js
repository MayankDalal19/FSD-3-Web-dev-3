const express=require("express");

const app=express();
const PORT = 3000

app.get("/students/:name",(req,res)=>{
    console.log(req.body);
    console.log(req.url);
    console.log(req.method);
    console.log(req.params.name);
    
    
    res.send("hello world")
})


app.get("/students",(req,res)=>{
    
    console.log(req.url);
    
    console.log(req.query.cgpa);
    
    
    res.send("hello from students")
})

app.listen(PORT,()=>console.log("server is runnning"))