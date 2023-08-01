// src/lib.rs

pub mod websocket;

// websocket.rs

pub async fn connect_ws(url: &str) -> Result<WebSocketStream> {
  // websocket connection example
}

pub async fn send_ws_message(ws: &mut WebSocketStream, msg: &str) -> Result<()> {
  // sending message example 
}

// main.rs

let ws = websocket::connect_ws(ws_url).await?;
websocket::send_ws_message(&mut ws, "hello").await?;
