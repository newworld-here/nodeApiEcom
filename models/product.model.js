module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      productname: {
        type: Sequelize.STRING,
      },
      productprice: {
        type: Sequelize.BIGINT
      },
      deliverby: {
        type: Sequelize.STRING
      },
      product_image: {
        type: Sequelize.STRING
      },
      productdescription: {
        type: Sequelize.STRING
      },
      productspecification: {
        type: Sequelize.STRING
      }
    });
    return Product;
  };