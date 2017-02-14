"use strict";
var mysql = require("mysql");

var dbManager = {};

dbManager.connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'snm'
});//s

dbManager.connectToDB = function() {
  dbManager.connection.connect(function (err) {
    if (err) {
      console.log('Error connecting to Db');
      return;
    }
    console.log('DB connection established');
  });
};

dbManager.endConnection = function() {
  dbManager.connection.end(function (err) {
  });
}

dbManager.getGroups = function(rejected, succeed){
  var query = "SELECT labsaccounting.group.name FROM labsaccounting.group;";
  dbManager.connection.query(query, function (err, rows) {
    if (err)
      rejected(err);
    else
      succeed(rows);
  });
};

module.exports = dbManager;
