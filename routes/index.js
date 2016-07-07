var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Hello Trunum App page*/
router.get('/hello', function(req, res) {
    res.render('hello', { title: 'Hello, Trunum!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
   // var filter = req.query.filter;
    var collection = db.get('usercollection');
   // collection.find({"username": filter},{},function(e,docs){
    	collection.find({},{},function(e,docs){
        res.send(docs);
    });
});

module.exports = router;
