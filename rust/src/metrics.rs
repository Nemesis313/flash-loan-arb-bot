// src/lib.rs

pub mod metrics;

// metrics.rs

pub fn setup_metrics() {
  // initialize metrics
}

pub fn inc_counter(name: &str) {
  // increment counter
}

pub fn set_gauge(name: &str, value: i64) {
  // set gauge
}

// main.rs

metrics::setup_metrics();
metrics::inc_counter("requests"); 
metrics::set_gauge("users", 100);
