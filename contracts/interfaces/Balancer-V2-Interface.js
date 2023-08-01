// interfaces/balancer-v2.js

const { Contract } = require('ethers');
const FlashLoan = require('../artifacts/FlashLoan.json');

class BalancerV2 {

  constructor() {
    this.flashLoanContract = new Contract(
      flashLoanAddress, 
      FlashLoan.abi,
      new ethers.providers.JsonRpcProvider('https://kovan.infura.io/v3/123abc123abc123abc123abc123abcde')
    );
  }

  async flashLoan(asset, amount) {
    return this.flashLoanContract.flashLoan(asset, amount);
  }

}

module.exports = BalancerV2;
