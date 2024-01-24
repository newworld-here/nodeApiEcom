module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
    return Role;
  };

  /*
After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new User: create(object)
find User by id: findByPk(id)
find User by email: findOne({ where: { email: … } })
get all Users: findAll()
find all Users by username: findAll({ where: { username: … } })

  */