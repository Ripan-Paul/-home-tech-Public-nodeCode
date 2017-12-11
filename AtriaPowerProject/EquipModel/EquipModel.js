var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
   /*imagePath: {type: String, required: true},
   title: {type: String, required: true},
   description: {type: String, required: true},
   price: {type: Number, required: true},*/
   equipment: {type: String, required: true},
   startTime: {type: String, required: true},
   endTime: {type: String, required: true},
   kwh: {type: Number, required: true},
   //reading: [{startTime: String, endTime: String, kwh: String}]
});

module.exports = mongoose.model('Product', schema);
