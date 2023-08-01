// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@balancer-labs/v2-vault/contracts/interfaces/IVault.sol";

contract Arbitrage {

  IVault vault;

  constructor(IVault _vault) public {
    vault = _vault; 
  }

  function executeArb(
    address pool1, 
    address pool2,
    address token1, 
    address token2,
    uint256 amount
  ) external {
    
    // Flash swap token1 from pool1
    bytes memory userData = abi.encode(token2); 
    vault.flashLoan(pool1, token1, amount, userData);
    
    // Swap token1 for token2 on pool2 
    uint t1Amount = IERC20(token1).balanceOf(address(this));
    IBalancerPool(pool2).swap(
      token1, 
      token2, 
      t1Amount,
      minAmountOut(t1Amount),
      maxPrice()
    );

    // Swap token2 back for token1 on pool1
    uint t2Amount = IERC20(token2).balanceOf(address(this)); 
    IBalancerPool(pool1).swap(
      token2,
      token1,
      t2Amount,
      minAmountOut(t2Amount), 
      maxPrice() 
    );

    // Repay flash loan
    uint totalOwed = amount + vault.flashFee(token1, amount);
    IERC20(token1).approve(address(vault), totalOwed);

  }

  function minAmountOut(uint amountIn) internal view returns (uint) {
    // Calculate minimum amount out
  }

  function maxPrice() internal pure returns (uint) { 
    return uint(-1); // No limit
  }

}
