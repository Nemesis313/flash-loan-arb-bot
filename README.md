# flash-loan-arb-bot

This bot monitors decentralized exchanges and performs arbitrage using flash loans.

## Setup

1. Install Rust

```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

2. Clone repo

```
git clone https://github.com/yourname/arb-bot
cd arb-bot
```

3. Install dependencies

```
cargo build
```

4. Configure environment 

Copy `.env.example` to `.env` and update values

5. Run bot

```
cargo run --bin arb-bot
```

## Operation

- The bot will connect to an Ethereum node to monitor exchanges
- It scans for price differences between DEX pools 
- When an opportunity is found, it executes an atomic arbitrage trade using a flash loan
- Profits are stored in the contract for later withdrawal

## Monitoring

Metrics are exported in Prometheus format at `/metrics` endpoint. Grafana dashboard included.

## Deployment

For production environments, check out the [deployment guide](docs/deploy.md).

## Contributing

Pull requests are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT license. See [LICENSE](LICENSE) for more details.

Let me know if you would like any sections expanded or have additional questions!
