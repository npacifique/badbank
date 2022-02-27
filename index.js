var express = require('express');
var app = express();
var cors = require('cors');
// add dal
var dal = require('./dal.js');

// used to serve  static files from piblic directory
app.use(express.static('public'));
app.use(cors());

// create account route
app.get('/account/create/:name/:email/:password', function(req, res){
  // res.send({
  //   name: req.params.name,
  //   email: req.params.email,
  //   password: req.params.password
  // });
  dal.create(req.params.name, req.params.email, req.params.password).
          then((user) => {
            console.log(user);
            res.send(user);
          });
});
// Todo: Refactor login route
app.get('/login/:email/:password', function(req, res){
  res.send({
    email: req.params.email,
    password: req.params.password
  });
});
// Todo: Refactor Deposit route
app.get('/deposit/:email/:amount', function(req, res){
  res.send({
    email: req.params.email,
    amount: req.params.amount
  });
});
// Todo: Refactor Withdraw route
app.get('/withdraw/:email/:amount', function(req, res){
  res.send({
    email: req.params.email,
    amount: req.params.amount,
    balance: 'currently not available'
  });
});
// Todo: Refactor Balance route
app.get('/balance', function(req, res){
  res.send('maintenance in progress')
})
// all accounts route
app.get('/account/all', function(req, res){
  // res.send({
  //   name: 'blaise',
  //   email: 'bishimwe@gmail.com',
  //   password: 'secret'
  // });
      dal.all().
          then((docs) => {
            console.log(docs);
            res.send(docs);
          })
});

// start the listener
var port = 3000;
app.listen(port);
console.log('running on port: '+ port);