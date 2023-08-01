// configure.js

const dotenv = require('dotenv').config();

module.exports = {
  eth_node_url: process.env.ETH_NODE_URL,
  private_key: process.env.PRIVATE_KEY,
  flashloan_pool: process.env.FLASHLOAN_POOL_ADDRESS,
  telegram_bot_token: process.env.TELEGRAM_BOT_TOKEN,
}
