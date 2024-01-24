'use strict';
//require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require("./config/auth.config");

// const cookieParser = require('cookie-parser');

// 
app.use(cors());
app.use(session({
    secret: config.secretKey,
    resave: false,
    saveUninitialized: false,
  }));

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
// app.use(cookieParser());
// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
const port = process.env.port || 4000;
app.listen(port, () => {
    console.log("server up and running on PORT :", port);
});
// app.get('/', (req, res) => {
//     res.send('hello world')
//   })
// app.use(...);
const db = require("./models");
const Role = db.role;
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
db.sequelize.sync();
// ...
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

module.exports = app;

/*
initial() function helps us to create 3 rows in database. In development, you may need to delete existing tables and re-sync the database. So you can use force: true like above code.

For production, just enter this line manually and use sync() with no parameters to avoid data loss:

...
const app = express();
app.use(...);
const db = require("./app/models");
db.sequelize.sync();
...

*/