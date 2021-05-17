var express = require("express");
const db = require("./../db.js");
var router = express.Router();
const mysql = require('mysql');

// TODO : DB 정보들 은닉 필요함.
const connection = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : '1234',
        port : 3306, //안써주면 안됨 mysql 포트를 써야함
        database : 'skkumeal',
    }
);



/* GET home page. */
router.get("/", function (req, res, next) {
  db.getAllMemos((rows) => {
    res.render("index", { rows: rows });
  });
  
});



//여기에 추가를 하면 됨
// 파일명을 정확하게 써줘야함. <%= name %> 찍으면 yes 출력
router.post('/process',(req,res,next) =>{
  connection.query("select * from user where id = ?",[req.body.id],(error, results) => {
    if(error){
      console.log(error);
    }

    if( results.length > 0){
      //등록 불가 id 중복
      return res.json({
        success : false,
        msg : "ID is duplicated",
      });
      
    }else{
      //등록 하는 코드 써야함

      //
      return res.json({
        success : true,
        msg : "Register Success",
      });
    }

  });
  console.log(req.body.id);
});

router.get('/signin',(req,res,next)=>{
  res.render('signin');
});

router.get('/signup',(req,res,next)=>{
  res.render('signup',{message:"dd"});
});

router.get("/category", function (req, res, next) {
  res.render("category");
});

router.get("/personalInfo", function (req, res, next) {
  res.render("personalInfo");
});

router.get("/moreinfo", function (req, res, next) {
  res.render("moreinfo");
});

module.exports = router; //router를 다시 모듈로
