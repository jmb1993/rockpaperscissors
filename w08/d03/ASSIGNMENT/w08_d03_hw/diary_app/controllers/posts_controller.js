var express = require('express'),
    router = express.Router(),
    Post = require('../models/post.js'),
    User = require('../models/user.js'),
    mongoose = require('mongoose');

router.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.send(posts);
  });
});

router.post('/posts', function (req, res) {
  var post = new Post(req.body);
  post.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Post saved');
      res.send(post);
    }
  });
});

module.exports = router;
