
//debugger;
/*var Web3 = require('web3');

if (typeof web3 !== 'undefined') { web3 = new Web3(Web3.currentProvider); } else { 
  // set the provider you want from Web3.providers 
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); }

//var web3 = new Web3('http://127.0.0.1:8545');
//web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
    //if (!web3.isConnected()) {
      //  console.error("Ethereum - no connection to RPC server");
    //} else {
      //  console.log("Ethereum - connected to RPC server");
    //}

//console.log('web3: ' + web3)
//debugger;
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
  //ether.addPoints(points);
  //console.log(ether.getPoints());
  //response.send('{"TotalPoints": ' + ether.getPoints() + '}');
})

app.get('/resetPoints', function(request, response) {
  //ether = new Ether(0);
  //ether.resetScore();
  this.points = 0;
  //this.points = ether.getPoints();
  console.log(this.points);
  response.send('{"TotalPoints": ' + this.points + '}');
})

app.get('/Accounts', function(request, response) {
  accounts = {"accounts":['0x344c68f803328cef5e7f171ed6d9ed81b71f9112',
              '0x835e033801179c4a70be34f875a470da7c3697a9',
              '0x75e3ac8d19c0537160813036247165f4de1b97ee',
              '0x4a5a1e90c97b74c24d48f8b2c9088be8c8913c2f',
              '0xbabbdcdfe8625dbac9b36a396a61743c970cef85',
              '0xa375f5a2bbe1de4363941747175d9ca7d57547b9',
              '0x98ede1efb769fa9f4c2d018d8c4861cd44070ab8',
              '0xefe28e5219dd8dd87e4f5082971e86f679ebc871',
              '0xdb168d983d2837342eaec304e5b64dca546e3a44',
              '0xd20c6d97d41acf3a21e5b3d14269a90c57ff947d']}
  console.log(accounts);
  response.send(accounts);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})