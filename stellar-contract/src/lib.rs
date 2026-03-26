#![no_std]
extern crate alloc;

pub mod amm;
pub mod errors;
pub mod events;
pub mod math;
pub mod prediction_market;
pub mod storage;
pub mod types;

pub use prediction_market::PredictionMarketContract;
