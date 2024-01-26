const db = require("../models");
const Product = db.product;
var multer = require('multer');

exports.addproduct = async (req, res) => {
    console.log("uuuuuuuuuuuu",`${req.body}`);

  // Save product to Database
  try {
    const product = await Product.create({
        productname: req.body.productname,
        productprice: req.body.productprice,
        deliverby: req.body.deliverby,
        product_image: req.body.product_image,
        productdescription: req.body.productdescription,
        productspecification: req.body.productspecification,
    });
    return res.status(200).send({message:"Product added"});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
