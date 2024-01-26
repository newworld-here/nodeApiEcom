module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING
      },
      phoneno: {
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    return User;
  };

  /*

  //regex that validate phone pattern for specific country
const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/ 
phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        validator: function(v) {
            return phoneValidationRegex.test(v); 
        },
    }
}

*/
