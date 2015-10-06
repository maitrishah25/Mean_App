var express = require('express');

var BlogsController = express.Router();

var Blog = require('../models/blog');

BlogsController.get('/', function(req,res){
  Blog.find({}, function(err,blogs){
    res.json(blogs);
  });
});

BlogsController.post('/', function(req,res){
  var blog = new Blog(req.body);
  blog.save(function(err,blog){
    res.json(blog);
  });
});

BlogsController.delete('/:id', function(req,res){
  var id = req.params.id;
  Blog.findByIdAndRemove(id, function(){
    res.json({status:202, message:'Success'});
  });
});

module.exports = BlogsController;
