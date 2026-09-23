const express = require("express")
const app = express();
const PORT = 3000
const morgan = require("morgan")

app.use(morgan("dev"));
// const logMiddleWare=(req,res,next)=>{
//     // console.log("Request Method:",req.method);
//     console.log("Request URL",req.url,"Request Method:",req.method,"Date",new Date().toLocaleString());
//     next()
      
// }

const apiMiddleWare=(req,res,next)=>{
    if (req.query.API_KEY=="1234") {
        next();
    } else {
        res.status(401).send("Unauthorised:Invalid API Key");
    }
}
app.use(apiMiddleWare); // global 
// app.use(logMiddleWare);



app.get("/",(req,res)=>{
    console.log("Hello World");
    
    res.send("Hello World")
});

app.get("/students",apiMiddleWare,(req,res)=>{
    console.log("Hello students");
    
    res.send("Hello Students")
})

app.listen(PORT ,()=>console.log("server is running"))