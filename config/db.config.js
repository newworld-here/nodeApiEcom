module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

//   The first five parameters are for the MySQL connection.
// pool is optional, this will be used to configure the Sequelize connection pool:

// max: maximum number of connections in the pool
// min: minimum number of connections in the pool
// idle: the maximum time, in milliseconds, the connection can be idle before being released
// obtain: maximum time, in milliseconds, the pool will try to get a connection before throwing an error