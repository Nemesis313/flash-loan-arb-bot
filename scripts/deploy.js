const { ethers } = require("ethers");

async function deploy() {
    const [owner] = await ethers.getSigners();

    const uniswapV2FactoryAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"; // Replace with the Uniswap V2 Factory address
    const uniswapV2Router02Address = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Replace with the Uniswap V2 Router02 address

    const FlashLoanArbitrageBot = await ethers.getContractFactory("FlashLoanArbitrageBot");
    const flashLoanArbitrageBot = await FlashLoanArbitrageBot.deploy(uniswapV2FactoryAddress, uniswapV2Router02Address);

    console.log
