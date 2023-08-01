// interfaces/ethereum-node.js

const ethers = require('ethers'); 

class EthereumNode {

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/12345679')
  }

  getBalance(address) {
    return this.provider.getBalance(address);
  }

  // other ethers provider methods
}

module.exports = EthereumNode;
