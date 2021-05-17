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
  
  res.render("index",{type : req.query.type,
    id : req.query.id,
  });
});


// router.get('/signin',(req,res,next)=>{
//   res.render('signin');
// });


router.get("/mypage", function (req,res,next){

  res.render("mypage",{
    type : req.query.type,
    id : req.query.id,
  });
});

//여기에 추가를 하면 됨
// 파일명을 정확하게 써줘야함. <%= name %> 찍으면 yes 출력
// connection을 계속 열고있는것 같은데.. 닫는것도 생각해줘야함.
// end를 쓰면 다시 요청시에 에러가 뜸. open을 다시 해야하는것 같음.
// signup
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
      connection.query("insert into user values(?,?,?,?,?,?,?)",[req.body.name,req.body.birth,req.body.id,req.body.pwd,req.body.email,1,""]);
      // 1과 ""은 type과 jjim

      return res.json({
        success : true,
        msg : "Register Success",
      });
    }
  });
  //
});
//modify information(personalinfo)
router.post('/modify',(req,res,next) =>{
  
  connection.query("update user set name = ?,birth=?,pwd=?,email=? where id=?",
  [req.body.name, req.body.birth, req.body.pwd ,req.body.email ,req.body.id], (error, results) =>{
    if(error){
      console.log(error);
    }
    
    if(results.changedRows){
      //바뀐경우
      return res.json({
            success : true,
            msg : "modify success",
          });
    }else{
      return res.json({
        success : false,
        msg : "modify failed",
      });
    }
  });
})


// signin
router.post('/login',(req,res,next) => {
  connection.query("select * from user where id = ? and pwd = ?",
  [req.body.id, req.body.pwd], (error, results) =>{
    if(error){
      console.log(error);
    }

    if(results.length > 0){
      //맞는경우
      //console.log(results[0].type);
      return res.json({
        success : true,
        msg : "success",
        type : results[0].type,
        id : results[0].id,
      });
    }else{
      return res.json({
        success : false,
        msg : "check your ID or Password"
      });
    }
  });
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
  res.render("personalInfo",{
    type : req.query.type,
    id : req.query.id,
  });
});

router.get("/moreinfo", function (req, res, next) {
  res.render("moreinfo");
});

module.exports = router; //router를 다시 모듈로
