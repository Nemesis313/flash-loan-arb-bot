// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@balancer-labs/v2-vault/contracts/interfaces/IVault.sol";

contract FlashLoan {

  IVault vault;

  constructor(address _vault) public {
    vault = IVault(_vault);
  }

  function initiateFlashLoan(address asset, uint256 amount) external {

    address receiver = address(this);
    
    vault.flashLoan(
      receiver,
      address(asset),
      amount,
      abi.encode(receiver, amount)
    );

  }

  function receiveFlashLoan(address asset, uint256 amount, uint256 fee, bytes calldata data) external returns (bytes32) {

    require(msg.sender == address(vault), "Unauthorized"); 
    
    // Execute arbitrage logic

    // Approve vault to take back loan amount + fee
    IERC20(asset).approve(address(vault), amount + fee);

    return keccak256("ERC3156FlashBorrower.onFlashLoan");
  }

}
