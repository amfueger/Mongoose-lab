const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/company'

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${connectionString}`);
})
mongoose.connection.on('disconnected', () => {
	console.log(`Mongoose is disconnected`);
})
mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose error');
})



/*


Company.create({name: 'Apple', founded: '1976-04-01', employees: 2, products: ['computers'], CEO: {name: 'Steve Jobs', age: 21}}, (err, createdCompany) => {
	if (err){
		console.log(err);
	} else {
		console.log(createdCompany);
	}
});


*/