// src/lib.rs

pub mod config;
pub mod ethereum;
pub mod arbitrage;
pub mod monitoring;
pub mod messaging;

// Config module
pub use config::{load_configuration, Settings}; 

// Ethereum interaction 
pub use ethereum::{get_provider, load_contract};

// Arbitrage logic
pub use arbitrage::{find_opportunities, execute_swap}

// Monitoring service 
pub use monitoring::start_monitoring;

// Messaging
pub use messaging::{send_telegram, send_email};

// Shared utilities
pub fn init_logger() {
  // Initialize logger
}

#[cfg(test)]
mod tests {
  // Library unit tests 
}
