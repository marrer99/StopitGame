
//debugger;
var Web3 = require('web3');

if (typeof web3 !== 'undefined') { web3 = new Web3(Web3.currentProvider); } else { 
  // set the provider you want from Web3.providers 
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); }
/*
var web3 = new Web3('http://127.0.0.1:8545');
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    if (!web3.isConnected()) {
        console.error("Ethereum - no connection to RPC server");
    } else {
        console.log("Ethereum - connected to RPC server");
    }

console.log('web3: ' + web3)
debugger;
*/

var express = require('express')
var Ether = require('./public/Ether.js');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/points', function(request, response) {
  ether = new Ether(0);
  points = Number(request.query.points);
  ether.addPoints(points);
  console.log(ether.getPoints());
  response.send('{"TotalPoints": ' + ether.getPoints() + '}');
})

app.get('/resetPoints', function(request, response) {
  ether = new Ether(0);
  ether.resetScore();
  this.points = 0;
  this.points = ether.getPoints();
  console.log(this.points);
  response.send('{"TotalPoints": ' + this.points + '}');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})