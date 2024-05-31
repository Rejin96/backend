const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const Product = require("./models/productModel");
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");

const app= express();
app.use(express.json());
app.use(cors());

mongoose
 .connect("mongodb://127.0.0.1:27017/HCOE")
 .then(() => {
    console.log("Connected to DB");
 })
 .catch((err) => {
    console.log(err.meggage);
 });

app.use('/api/products', productRouter);
app.use('/api/user',userRouter);


app.listen(3000,() => {
    console.log("Server is running")
});
