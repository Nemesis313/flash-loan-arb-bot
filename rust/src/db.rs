// src/lib.rs

pub mod db;

// db.rs

pub struct DbConn(diesel::SqliteConnection);

pub fn connect_db() -> DbConn {
  // connect to database  
}

pub fn get_users(conn: &DbConn) -> QueryResult<Vec<User>> {
  // query example
}

// main.rs

let conn = db::connect_db();
let users = db::get_users(&conn);
