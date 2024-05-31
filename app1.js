const express = require("express");
function logger(req,res,next){
    console.log("Request received");
    next();
}
const app =express();
app.use(express.json()); //middle ware (request ra response ko bich ko kura)
app.use(logger);
let posts=[
    {
        id : 1,
        title : "Post 1",
        description : "description 1",
    },
    {
        id : 2,
        title : "Post 2",
        description : "description 2",
    }
];

app.get("/",(req,res) => {
    res.send("HOME PAGE");
});


//localhos:3000/getposts
app.get("/getposts",(req,res)=>{
    if(req.query.id){
        //console.log(req.query);
        let post = posts.find((p) => p.id == req.query.id);
        if(post) res.send(post);
        else res.status(404).send("Post not found");
    }else 
    res.send(posts);
});

app.post("/addposts",(req,res) => {
    let post =req.body;
    posts.push(post);
    res.send(posts);
});

app.put("/update/:id", (req,res) => {
    let id = req.params.id;
    let post = posts.find((p) => p.id == id);
    let description = req.body.description;
    let title = req.body.title;
    post.title =title;
    post.description=description;
    res.send(post);
});

app.listen(3000,()=>{
    console.log("Server is up and running");
});

