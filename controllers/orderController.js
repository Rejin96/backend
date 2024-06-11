const Order = require("../models/orderModel");
const Product = require("../models/productModel");
async function addOrder() {
  let { orderBy, productList } = req.body;
  await Order.create({ orderBy, productList });
  productList.forEach(async (p) => {
    await Product.findByIdAndUpdate(p.productId, {
      $inc: { countInStock: -p.qty },
    });
  });
  res.send({ msg: "Order place successfully" });
}
module.exports = addOrder;