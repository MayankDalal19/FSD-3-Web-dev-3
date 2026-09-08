const express = require("express")
const app = express();
const PORT = 3000

const logMiddleWare=(req,res,next)=>{
    console.log("Request Method:",req.method);
    console.log("Request URL",req.url);
    next()
      
}

const apiMiddleWare=(req,res,next)=>{
    if (req.query.API_KEY=="1234") {
        next();
    } else {
        res.status(401).send("Unauthorised:Invalid API Key");
    }
}
app.use(apiMiddleWare);
app.use(logMiddleWare);


app.get("/",(req,res)=>{
    console.log("Hello World");
    
    res.send("Hello World")
});

app.get("/students",(req,res)=>{
    console.log("Hello students");
    
    res.send("Hello Students")
})

app.listen(PORT ,()=>console.log("server is running"))