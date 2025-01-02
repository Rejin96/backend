const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    productList: [
        {
            name: String,
            price: Number,
            qty: Number,
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product",
            }
        },
    ],
    isdeleivered: {
        type: Boolean,
        default: false,
    },
});

const Order = mongoose.model("Order",orderSchema);
module.exports= Order;
