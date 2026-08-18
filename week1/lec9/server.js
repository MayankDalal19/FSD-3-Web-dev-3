const express=require("express");

const app=express();

const PORT = 3000

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{
    res.send("about page");
})

app.get("/contact",(req,res)=>{
    res.send("Contact page");
})

app.listen(PORT,()=>console.log("the server is running"));
