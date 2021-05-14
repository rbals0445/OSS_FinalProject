var express = require("express");
const db = require("./../db.js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  db.getAllMemos((rows) => {
    res.render("index", { rows: rows });
  });
});

/*
connection.query('select * from seller',function(err, rows, fields){
    if(err) throw err;
    console.log('The solution is : ', rows[0].ProductName )
});*/

//여기에 추가를 하면 됨
// 파일명을 정확하게 써줘야함. <%= name %> 찍으면 yes 출력

router.get("/signin", function (req, res, next) {
  res.render("signin", { name: "yes" });
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { name: "yes" });
});

router.get("/category", function (req, res, next) {
  res.render("category", { name: "yes" });
});

router.get("/personalInfo", function (req, res, next) {
  res.render("personalInfo", { name: "yes" });
});

router.get("/moreinfo", function (req, res, next) {
  res.render("moreinfo", { name: "yes" });
});

module.exports = router; //router를 다시 모듈로
