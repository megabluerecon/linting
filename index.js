const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = 'Home Page';
  res.render('pages/index', { 'title': title });
});

app.get('/doom', (req, res) => {
  var title = 'Doom (1993)';
  res.render('pages/doom', { 'title': title });
});

app.get('/cyberpunk', (req, res) => {
  var title = 'Cyberpunk 2020';
  res.render('pages/cyberpunk', { 'title': title });
});

app.get('/mre', (req, res) => {
  var title = 'MRE';
  res.render('pages/mre', { 'title': title });
});

//users index is our list page
app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index', {
    title: title,
    users: data
  });
});

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});
