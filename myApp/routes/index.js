var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let client = mysql.createConnection({
  user: "root",
  password: "wjdansgh1!",
  database: "mysqltest"
})


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

router.get('/create', function (req, res, next){
  client.query("select * from products", function(err, result, fields){
    if(err){
      console.log(err);
      console.log("쿼리문에 오류가 있습니다.");
    }else{
      res.render('create', {
        results : result
      });
    }
  });
});

router.post('/create', function(req, res, next){
  var body = req.body;

  client.query("insert into products(name, modelnumber, series) values(?,?,?)", [
    body.name, body.modelnumber, body.series
  ], function(){
    res.redirect("/create");
  });         
});

module.exports = router;
