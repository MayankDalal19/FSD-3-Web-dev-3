const http=require("http");

const users=[
    {id:1,name:"mayank",email:"cheeta@gmail.com"},
    {id:2,name:"hahaha",email:"cheeta2334@gmail.com"},
    {id:3,name:"hihhihi",email:"cheeta23@gmail.com"}
]

const server = http.createServer((req,res)=>{
    // res.end("hello World again ");
    if (req.url=="/") {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>welcome to homepage</h1>");
        res.end();
        
    }else if(req.url=="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>welcome to about page</h1>");
        res.end();
    }else if(req.url="/users"){
        res.writeHead(200,{"content-type":"application/json"});
        res.write(JSON.stringify(users));
        res.end();
    } else {
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<h1>404 page  not found</h1>");
        res.end();
    }
});

server.listen(3000,()=>{
    console.log("server is running on port 3000");
    
});