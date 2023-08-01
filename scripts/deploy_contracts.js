// deploy_contracts.js

const { ethers } = require("ethers");
const arbitrageArtifact = require("../artifacts/Arbitrage.json");

async function main() {

  const provider = new ethers.providers.JsonRpcProvider(process.env.ETH_NODE_URL);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const arbitrageContract = new ethers.ContractFactory(
    arbitrageArtifact.abi,
    arbitrageArtifact.bytecode,
    signer
  );

  console.log("Deploying arbitrage contract...");
  const contract = await arbitrageContract.deploy();

  console.log(`Arbitrage contract deployed to ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
