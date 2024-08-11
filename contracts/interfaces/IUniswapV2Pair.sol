pragma solidity ^0.8.10;

interface IUniswapV2Pair {
    function getReserves() external view returns (uint256 reserve0, uint256 reserve1);
}
