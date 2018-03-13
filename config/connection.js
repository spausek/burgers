
var mysql = require('mysql');

var connection; 

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else{
connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'kylekyle',
	database: 'burgers_db'
});

}


connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error');
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;