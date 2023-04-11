var mysql = require("mysql2");
var mysqlConfig = require("./config.js");

var connection = mysql.createConnection(mysqlConfig);
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connected to" + mysqlConfig.database);
  }
});