// tests/test_arb_bot.rs

// Test no price difference 
#[tokio::test]
async fn test_no_arb() {
  let profit = execute_arbitrage(pool1, pool2, token1, amount).await;
  assert_eq!(profit, 0); 
}

// Test insufficient liquidity
#[tokio::test]
async fn test_insufficient_liquidity() {
  let err = execute_arbitrage(pool1, pool2, token1, amount).await.unwrap_err();
  assert_eq!(err.kind(), InsufficientLiquidity); 
}

// Test partial fill
#[tokio::test] 
async fn test_partial_fill() {
  // Mock pool only fills 50% 
  let profit = execute_arbitrage(pool1, pool2, token1, amount).await?;
  
  // Verify 50% of amount is refunded
  assert_eq!(token1.balance_of(contract.address), amount / 2);
}

// Test slippage fee
#[tokio::test]
async fn test_slippage_fee() {
  // Apply 1% slippage fee
  let profit = execute_arbitrage(pool1, pool2, token1, amount).await?;

  // Check arb profit reduced by 1% 
  assert_eq!(profit, expected_profit * 0.99); 
}

// Test custom error
#[tokio::test]
fn test_insufficient_funds_error() {
  let error = InsufficientFundsError;
  assert_eq!(error.kind(), "insufficient-funds");
}
