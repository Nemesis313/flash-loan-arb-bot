// tests/test_arb_bot.rs

use ethers::providers::Provider;
use anyhow::Result;

use arb_bot::{execute_arbitrage, load_contract};

#[tokio::test]
async fn test_arb_execution() -> Result<()> {

  // Set up mock pools
  let pool1 = create_mock_pool(vec![token1, token2], vec![100, 200]);
  let pool2 = create_mock_pool(vec![token1, token2], vec![300, 150]);

  // Manipulate prices
  set_token1_price(&pool1, 2); 
  set_token2_price(&pool1, 1);

  set_token1_price(&pool2, 1);
  set_token2_price(&pool2, 3);

  // Load bot contract
  let provider = Provider::localhost(); 
  let contract = load_contract(&provider);

  // Execute arbitrage 
  let profit = execute_arbitrage(
    &contract,
    pool1.address(), 
    pool2.address(),
    token1,
    1000
  ).await?;

  assert!(profit > 0);

  Ok(())
}

// Helper functions

fn create_mock_pool(tokens: Vec<H160>, balances: Vec<U256>) -> MockPool {
  // returns a mock pool struct
}

fn set_token1_price(pool: &MockPool, price: U256) {
  // set mock price
}
