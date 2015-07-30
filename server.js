'use strict';

//'{"prop":"string", "prop1":2, "propAgain":true}'//this is json, this is how data gets communicated

var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var getRandomWord = require('./lib/getRandomWord.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var postRandomWord = require('./lib/postRandomWord.js');
var app = express();//app at this pt is an obj
var port = process.env.PORT || 3000; //port is - like we're bulding a house, house is server, 3000 is the front door, we want perople to come in the front door

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/app/'));

//make an adjective constructor function
/*var Adjective = function(){
  this.sleepy = true;
  this.crazy = true;
  this.penultimate = true;
  this.superb = true;
  this.lackadaisical = true;
  this.geodesic = true;
} */

//make an instance fo that adjective object
var adjective = new Adjective();

/*var Noun = function(){
  this.train = true;
  this.fish = true;
  this.penguins = true;
  this.boy = true;
  this.monkey = true;
  this.house = true;
}*/
var noun = new Noun();

/*var Verb = function(){
  this.running = true;
  this.sitting = true;
  this.watching = true;
  this.falling = true;
  this.noticing = true;
  this.standing = true;
  this.snoozing = true;
  this.flying = true;
  this.burping = true;
}*/

var verb = new Verb();

//make that word retrieval function
/*function getRandomWorld(object) {
  //get all those porperties into an array
  var propArray = Object.keys(object);

  //pick a random word from the array
  var randomProp = propArray[Math.floor(Math.random()
    * propArray.length)];

  //return that word in an object
  return {word: randomProp};
}*/

/*function postRandomWord (word, wordObject) {
  //check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {
  //if it's NOT on the object, add it and send a message that we added it
  wordObject[word] = true;
  return {message: 'Thanks! We added your fabulous word, ' + word +
    ' to our list.'}; //this 'message is from the script.js - var adjectiveRes = response.message;'
  }

  //if it IS on the object, send a polite message saying we have it
  return {message: 'Thanks! We already have your word, ' + word +
    ' in our list.'};
  //those messages will be the return value of this function
}*/

app.get('/', function(req, res){
  res.sendFile('index.html');
});//there are diff http request that can be made like get and post amongst others
//get - when someone comes to your door 3000 and requests something, we give back something which is 'hello world!' here
//callback - i want u to execute this function. this function always has 2 parameter, request and respond
//first parameter is request coming in and 2nd is reponse is what is responded
//.send means either u can send http without any thing or something like hello world

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.post('/adjective', function(req, res){
  console.log(req.body);
  res.json(postRandomWord(req.body.word, adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.post('/verb', function(req, res){
  console.log(req.body);
  res.json(postRandomWord(req.body.word, verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.post('/noun', function(req, res){
  console.log(req.body);
  res.json(postRandomWord(req.body.word, noun));
});


app.listen(port, function(){ //when u want your server to start working you need your method app to start listening
  console.log('server started on port ' + port);//callback function
});
