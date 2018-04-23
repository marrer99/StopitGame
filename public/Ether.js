class Ether {
    constructor(account) {
        this.account = account;
        this.contract = 0;
        this.points = 0;
        this.contract = '';
    }
    getAccount() {
        var acc = {from: ''};
        acc.from = this.account
        return acc;
    }

    setContract(contract) {
        this.contract = contract;
    }
    getPoints() {
        //contract = 
        this.getContract(this.account);
        this.points = this.contract.getPoints(this.getAccount()).toNumber();
        return this.points;
    }
    addPoints(points) {
        this.getContract(this.account);
        this.contract.addPoints(points,this.getAccount()); //({from: web3.eth.accounts[0], to:web3.eth.accounts[1],gas: 10000000 }, function(err, res) {;});
        this.points += points;
        return this.points;
    }
    resetScore() { 
        this.getContract(this.account);
        this.contract.resetScore(this.getAccount());// ({from: web3.eth.accounts[0], to:web3.eth.accounts[1],gas: 10000000 }, function(err, res) {;});
        this.points += 0;
        return this.points;
    }
    createAccount(){
        return web3.eth.accounts[0];
    }
    setAccount(account){
        this.account = account;
    }
    deployContract(){
        var playerscoreContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"resetScore","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"points","type":"int256"}],"name":"addPoints","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPoints","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"}]);
var playerscore = playerscoreContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b506101db806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063617706cc1461005c578063deae0f7714610073578063f4b7095b146100a0575b600080fd5b34801561006857600080fd5b506100716100cb565b005b34801561007f57600080fd5b5061009e60048036038101908080359060200190929190505050610114565b005b3480156100ac57600080fd5b506100b5610166565b6040518082815260200191505060405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254019250508190555050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001549050905600a165627a7a723058200e2089db5f19f93336288260dd1724bfdce30b7f0de9d974636e4e49f71e9dbb0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })}
    getContract(account){
        var playerscoreContract = web3.eth.contract(
            [{"constant":false,"inputs":[],"name":"resetScore","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
            ,{"constant":false,"inputs":[{"name":"points","type":"int256"}],"name":"addPoints","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
            ,{"constant":true,"inputs":[],"name":"getPoints","outputs":[{"name":"","type":"int256"}],"payable":false,"stateMutability":"view","type":"function"}
            ]);
    this.contract =  playerscoreContract.at('0x0D8A4BB9b25252Cc91F05d8AFDf63b240fEb8075');
    //this.contract =  playerscoreContract.at('0x7C25C3100Fc3DE3D63cac0aEdfbED99AAe36e557'); //0x7C25C3100Fc3DE3D63cac0aEdfbED99AAe36e557
    return this.contract;
    }
}

module.exports = Ether;