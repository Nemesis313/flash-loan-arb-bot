const { expect } = require("chai");
const { ethers } = require("ethers");

describe("FlashLoanArbitrageBot", () => {
  let flashLoanArbitrageBot;
  let owner;
  let uniswapV2Factory;
  let uniswapV2Router02;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    uniswapV2Factory = await ethers.getContractAt("IUniswapV2Factory", "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
    uniswapV2Router02 = await ethers.getContractAt("IUniswapV2Router02", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");

    flashLoanArbitrageBot = await ethers.getContractFactory("FlashLoanArbitrageBot");
    flashLoanArbitrageBot = await flashLoanArbitrageBot.deploy(uniswapV2Factory.address, uniswapV2Router02.address);
  });

  it("should have the correct owner", async () => {
    expect(await flashLoanArbitrageBot.owner()).to.equal(owner.address);
  });

  it("should have the correct Uniswap V2 Factory address", async () => {
    expect(await flashLoanArbitrageBot.uniswapV2Factory()).to.equal(uniswapV2Factory.address);
  });

  it("should have the correct Uniswap V2 Router02 address", async () => {
    expect(await flashLoanArbitrageBot.uniswapV2Router02()).to.equal(uniswapV2Router02.address);
  });

  // Add more tests for the `initiateFlashLoanArbitrage` function
});
