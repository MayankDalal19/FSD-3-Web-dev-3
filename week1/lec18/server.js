const express = require("express")
const app = express();

const PORT =3000;

app.get("/",(req,res,next)=>{
    console.log("Method:", req.method)
    console.log("URL:", req.url)
    let age =16
    try {
        if (age<=18) {
            throw new Error("Age is not Valid")
        } else {
            res.send("Welcome to the home page")
        }
    } catch (error) {
        next(error)
    }
})


app.use((req,res)=>{ // invalid route middleware
    res.status(404).send({
        success:false,
        message:"Page not found"
    });
}); // always write at the end of the file !!

app.use((error,req,res,next)=>{ // error handling middleware
    res.status(500).send({
        success:false,
        message:error.message
    })
})  // always write at the end of the file !!


app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
})