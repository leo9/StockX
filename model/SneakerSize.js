var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SneakerSizeSchema = new Schema({
  // nike. adidas
  brand: String,
  // yeezy. jordan.
  style: String,
  // full name of the sneaker
  fullName: String,

  trueToSize: Number,
  date: {type: Date, default: Date.now},
}, { collection: 'SneakerSize', usePushEach: true });

module.exports = mongoose.model('SneakerSize', SneakerSizeSchema);
