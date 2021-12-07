var contractABI = [];
var contractAdress = '0xc4e85916efF0a8Dd8F14de639481B0aEA3fcFe03';
var web3= new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAdress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
    .then(console.log);