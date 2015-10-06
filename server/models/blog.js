var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: {type: String},
  entry: {type: String},
});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
