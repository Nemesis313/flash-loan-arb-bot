use flash_loan_arbitrage_bot::FlashLoanArbitrageBot;

#[tokio::main]
async fn main() {
    let uniswap_v2_factory_address = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f".to_string();
    let uniswap_v2_router02_address = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D".to_string();

    let flash_loan_arbitrage_bot = FlashLoanArbitrageBot::new(
        uniswap_v2_factory_address,
        uniswap_v2_router02_address,
    );

    let tokens = vec!["token1".to_string(), "token2".to_string()];
    let amounts = vec![100, 200];
    let deadline = 1643723400;

    match flash_loan_arbitrage_bot.initiate_flash_loan_arbitrage(tokens, amounts, deadline).await {
        Ok(flash_loan) => {
            println!("Flash loan initiated successfully: {:?}", flash_loan);
        }
        Err(err) => {
            println!("Error initiating flash loan: {:?}", err);
        }
    }
}
