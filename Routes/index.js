const express = require('express');
const router = express.Router();
const passport = require('passport');
const Posts = require('../Models/Post');
const User = require('../Models/Admin');
const Mongoose = require('mongoose');
const moment = require('moment');
//const PassportFacebook = require('../Models/FacebookUser.js');
//const PassportTwitter = require('../Models/TwitterUser.js');

//=================
// GET Routes
//=================

router.get('/', (req, res, next) => {
    res.render('Home');
  });

router.get('/About', (req, res, next) => {
    res.render('About');
  });

router.get('/Benefits', (req, res, next) => {
    res.render('Benefits');
  });

  router.get('/Contact', (req, res, next) => {
    res.render('Contact');
  });

  router.get('/Products', (req, res, next) => {
    res.render('Products');
  });

  router.get('/Search', (req, res, next) => {
    res.render('Search');
  });

  router.get('/News', (req, res, next) => {
    res.render('News');
  });
  
//================
//POST Routes
//================

/* router.post("/News", upload.single('image'), function(req, res){
  cloudinary.uploader.upload(req.file.path, function(result) {
  var name = req.body.name;
  var image = req.body.image = result.secure_url;
  var textField = req.body.textField;    
  //var author = {}
  var newPosts = {name: name, image: image, textField: textField};

  Posts.create(newPosts, function(err, newlyCreated){
      if(err){
          console.log(err);
      } else{
          res.redirect("/blog");
      }
  });
}); */
//});

//================
//PUT Routes
//================

//================
//DESTROY Routes
//================

router.delete("/News/:id", (req, res, next) => { //change
  Posts.findByIdAndRemove(req.params.id, (err) => { //change POST?
      if(err){
          res.redirect("/blog"); //change
      }else{
          res.redirect("/blog"); //change
      }
  });
});

//================
//AUTH Routes
//================

router.get('/login', function(req, res, next) {
    res.render('Login');
  });

  //Logout 
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

//================
//ALL ROUTE
//================

router.get("*", (req, res) => {
    res.render("404")
});

module.exports = router;