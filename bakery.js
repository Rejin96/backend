const express= require("express");

const app= express();

app.get("/",(req,res) => {
    res.send("This is the home page");
});

app.get("/profile",(req,res) => {
    let user={
        id : 101,
        name : "Rejin Maharjan"
    };
    res.send(user);
});

app.listen(3026,()=>{
    console.log("Server is up and running");
});