const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
//const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'short verify viable farm actress smooth chair divorce combine enhance unable smart',
  'https://rinkeby.infura.io/v3/debf658c28af4c0ba30cc75e4f57b750'
);
const web3 = new Web3(provider);

const deploy = async() => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to ', result.options.address);
};
deploy();
