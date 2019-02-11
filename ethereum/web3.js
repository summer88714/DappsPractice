import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  // in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // on server or the user is not using metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/debf658c28af4c0ba30cc75e4f57b750'
  );
  web3 = new Web3(provider);
}

export default web3;
