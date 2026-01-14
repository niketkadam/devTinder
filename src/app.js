const express = require('express');
const app = express();



app.use("/users",(req,res)=>{
    res.send("users came");
});

app.use("/",(req,res)=>{
    res.send("Welocme to node tinder");
 });

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
