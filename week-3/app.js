const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');

/* assignment1 */
app.get('/', (req, res) =>{
	res.send('Hello, My Server!');
});

/* assignment2 */
app.get('/getData', (req, res) =>{
  const url = req.query.number;
  const number = parseInt(req.query.number);

  if (!url){
    res.send('Lack of Parameter');
  } else if(!number){
    res.send('Wrong Parameter');
  } else {
    var text = '1' ;
    var sum = 1;
    for (i=2; i<=number; i++) {
      text = text + '+' + i ;
      sum += i ;
    }
    text += '=' + sum;
    res.send(text);
  }
});

app.get('/myName', (req, res) =>{
  if (req.cookies.username){
    res.render('myName', {name:req.cookies.username});
  } else{
    res.render('myName');
  }
});

/* assignment3 */


/* assignment4 */
app.post('/myName', (req, res) =>{
  const name = req.body.username;
  res.redirect(`/trackName?name=${name}`);
});

app.get('/trackName', (req,res) =>{
  res.cookie('username', req.query.name);
  res.redirect(`/myName`);
});

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
  res.render('error');
});

app.listen(3000, () =>{
	console.log('Hello, My Server!')
});
