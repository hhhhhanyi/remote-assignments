const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false}));

//Create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'b0341009',
  database : 'assignment'
});

//connect
db.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('MySQL connected...');
});

//create DB
app.get('/createdb',(req,res) =>{
  let sql = 'create database assignment';
  db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send('Database created.....');
  });
});

//create table
app.get('/createtable', (req,res) =>{
  let sql = "CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send('User table created.....');
  })
});

//select Posts
app.get('/get', (req,res)=>{
  let sql = 'SELECT * from user';
  let query = db.query(sql, (err,results)=>{
    if(err) throw err;
    console.log(results);
    res.send('user fetched.....');
  });
});

app.get('/home', (req,res)=>{
  res.render('home');
});

app.post('/form1', (req,res)=>{
  const email = req.body.si_email;
  const password = req.body.si_password;
  const err = "";

  let si_sql = `SELECT * from user WHERE email = '${email}'`;
  let si_query = db.query(si_sql, (err,result)=>{
    if(err) throw err;
    if (result.length == 0){
      error = "請輸入正確 email";
      res.render('home', {error});
    } else {
      for(i=0; i<result.length; i++){
        if (result[i].password == password){
          res.redirect(`/member`);
        } else {
          error = "請輸入正確 password";
          res.render('home', {error});
        }
      }
    }
  });
});

app.post('/form2', (req,res)=>{
  const email_su = req.body.su_email;
  const password_su = req.body.su_password;

  let su_sql = `SELECT * from user WHERE email = '${email_su}'`;
  let su_query = db.query(su_sql, (err,result)=>{
    if(err) throw err;
    if (result.length == 0){
      let post = {email:email_su, password:password_su};
      let sql = 'INSERT INTO user SET ?';

      let query = db.query(sql, post, (err,result)=>{
        if(err) throw err;
        console.log(result);
      })
      res.redirect(`/member`);
    } else {
      error = "email 已經註冊過。";
      res.render('home' , {error});
    }
  });
});

app.get('/member', (req,res)=>{
  res.render('member');
});


/* 下載SQL
mysqldump -u root -p b0341009 --all-databases > assignment.sql
*/

app.listen('3000', ()=>{
  console.log('success!');
});
