const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const companySchema = new Schema({
	name: {
		type: String, 
		required: true
	},
	founded: Date,
	employees: Number,
	active: true,
	products: [String],
	CEO: {
		name: String,
		age: Number
	}
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;