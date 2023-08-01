// interfaces/arbitrage-contract.js

const { Contract } = require('ethers');
const Arbitrage = require('../artifacts/Arbitrage.json');

class ArbitrageContract {

  constructor() {
    this.contract = new Contract(
      arbitrageAddress,
      Arbitrage.abi,
      signer 
    );
  }

  async executeArbitrage(...) {
    return this.contract.executeArbitrage(...); 
  }

}

module.exports = ArbitrageContract;
