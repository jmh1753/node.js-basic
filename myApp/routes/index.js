var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//DB
let database_query = require('./Database/database_query');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'home' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { page: 'login' });
});

router.get('/join', function(req, res, next) {
  res.render('join', { page: 'join' });
});

router.get('/fileupload', function(req, res, next) {
  res.render('fileupload', { page: 'fileupload' });
});


router.get('/edit', function(req, res, next){
  res.render('product/edit', {
    title : "Express~"
  });
});


router.post('/test1234', async(req, res)=>{
  const test1234 = await database_query.test(test);

  //ex1
  res.render('test/test/test', {
    'message' : test1234
  });

  //ex2
  res.send('success');

  //ex3
  res.json({
    '1' : '1',
    'message' : test1234,
    '3' : '3'
  });

});


module.exports = router;
