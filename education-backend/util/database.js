const mysql = require ('mysql2');

const config = require('../config/config.json');

const conn = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
  });

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });

  module.exports = conn;



  //======Another way to connect to database=======//

// const pool = mysql.createPool({
//     host: config.host,
//     user: config.user,
//     password: config.password,
//     database: config.database,
// });


// module.exports = pool.promise();


//======End of Another way to connect to database=======//

