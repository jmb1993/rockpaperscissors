var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
  content: String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
