const express=require("express")

const app=express()
const port=3000
app.listen(port,()=>{
    console.log("server is running port number 3000")
})

//api creation syntax : server.method(path,callback)
//#crud
app.get("/",(req,res)=>{
    res.send("<h1>welcome to my college...</h1>")
})

app.get("/",(req,res)=>{
    res.send("<h1>welcome to my college...</h1>")
})

app.post("/student",(req,res)=>{
    res.json({
        message:"student added sucessfully",
        data:req.body

    });
});

