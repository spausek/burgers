
var burger = require('./burgers.js');

var connection = require('../config/connection.js');

burger.all(function (data) {
	console.log('burgers.all test...\n\n');

	console.log('__________Burger Menu__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Burger ID = ' + data[i].id);
		console.log('Burger Name = ' + data[i].burger_name);
		console.log('Available = ' + data[i].devoured);

		
	}
});

burger.create(['burger_name', 'devoured'],
	['Hot Test Burger', false],
	function(data){
		console.log('New burger test ' + data.insertId);
	}
	);

burger.update({devoured: true}, 'id = 1', function (data) {
	console.log('\n\nburger.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();