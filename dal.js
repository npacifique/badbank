// Required packages
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
  console.log("connected successfuly to the db server");
  //connect to my project , nod db is accessible to all calls
  db = client.db('myproject');
});
// Create user account
function create(name, email, password){
  return new Promise((resolve, reject) => {
    const collection = db.collection('users');
    const doc = {name, email, password, balance: 0};
    collection.insertOne(doc, {w:1}, function(err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}
//Add Login
//Deposit
//Add Withdraw
//Add Balance

// all users
function all(){
  return new Promise((resolve, reject) => {
    const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
              err? reject(err) : resolve(docs);
            });
  })
}

//export the create and all functions so we cann use them from the express the application
module.exports = {create, all};