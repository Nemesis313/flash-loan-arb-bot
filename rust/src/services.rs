// In separate thread
loop {
  let opportunities = check_arb_opportunities();
  for opportunity in opportunities {
    execute_arbitrage(opportunity);
  }
}
