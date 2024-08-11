pragma solidity ^0.8.10;

import "./FlashLoan.sol";
import "./interfaces/IUniswapV2Factory.sol";
import "./interfaces/IUniswapV2Pair.sol";
import "./interfaces/IUniswapV2Router02.sol";

contract FlashLoanArbitrageBot {
    address public owner;
    address public uniswapV2Factory;
    address public uniswapV2Router02;

    constructor(address _uniswapV2Factory, address _uniswapV2Router02) {
        owner = msg.sender;
        uniswapV2Factory = _uniswapV2Factory;
        uniswapV2Router02 = _uniswapV2Router02;
    }

    function initiateFlashLoanArbitrage(
        address[] memory _tokens,
        uint256[] memory _amounts,
        uint256 _deadline
    ) public {
        // Check if the caller is the owner
        require(msg.sender == owner, "Only the owner can initiate the flash loan");

        // Create a new flash loan instance
        FlashLoan flashLoan = new FlashLoan(
            _tokens,
            _amounts,
            _deadline,
            uniswapV2Factory,
            uniswapV2Router02
        );

        // Execute the flash loan
        flashLoan.execute();
    }
}
