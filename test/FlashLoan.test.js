const { expect } = require("chai");
const { ethers } = require("ethers");

describe("FlashLoan", () => {
  let flashLoan;
  let uniswapV2Factory;
  let uniswapV2Router02;

  beforeEach(async () => {
    uniswapV2Factory = await ethers.getContractAt("IUniswapV2Factory", "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
    uniswapV2Router02 = await ethers.getContractAt("IUniswapV2Router02", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");

    flashLoan = await ethers.getContractFactory("FlashLoan");
    flashLoan = await flashLoan.deploy(
      ["token1", "token2"],
      [100, 200],
      1643723400,
      uniswapV2Factory.address,
      uniswapV2Router02.address
    );
  });

  it("should have the correct tokens", async () => {
    expect(await flashLoan.tokens()).to.deep.equal(["token1", "token2"]);
  });

  it("should have the correct amounts", async () => {
    expect(await flashLoan.amounts()).to.deep.equal([100, 200]);
  });

  it("should have the correct deadline", async () => {
    expect(await flashLoan.deadline()).to.equal(1643723400);
  });

  // Add more tests for the `execute` function
});
