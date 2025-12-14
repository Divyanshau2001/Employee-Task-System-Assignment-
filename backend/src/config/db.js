const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "task_tracker",
});

module.exports = db.promise();