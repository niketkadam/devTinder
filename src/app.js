const express = require('express');
const {adminAuth,userAuth} = require('./middlewares/auth');
const app = express();

app.use("/admin", adminAuth);

app.get("/user/getData",userAuth,(req,res)=>{
    res.send("get user data");
})

app.post("/user/login",(req,res)=>{
    res.send("logged in successfully");
})

app.get("/admin",(req,res)=>{
    res.send("user came");
})

app.get("/admin/deleteuser",(req,res)=>{
    res.send("deleted userr");
})

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
