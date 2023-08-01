// src/lib.rs

pub mod abi;
pub mod websocket;

// abi.rs

pub fn encode_data(func_sig: Bytes, args: Bytes) -> ByteBuf {
  // encoding example
}

// main.rs 

use crate::abi::encode_data;

let data = encode_data(func_sig, args); // use it
