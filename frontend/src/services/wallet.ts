// ============================================================
// BOXMEOUT — Wallet Service
// Manages Freighter wallet connection and Stellar transactions.
// Contributors: implement every function marked TODO.
// ============================================================

import type { BetSide, TxStatus } from '../types';

/**
 * Connects to the Freighter browser extension.
 * Falls back to Albedo if Freighter is not installed.
 *
 * Steps:
 *   1. Detect which wallet is available (window.freighter or window.albedo)
 *   2. Request user permission for the app
 *   3. Return the user's public Stellar G... address
 *
 * Throws WalletNotInstalledError if neither wallet is available.
 * Throws WalletConnectionError if user rejects the request.
 */
export async function connectWallet(): Promise<string> {
  // TODO: implement
}

/**
 * Disconnects the wallet and removes the stored address from localStorage.
 */
export function disconnectWallet(): void {
  // TODO: implement
}

/**
 * Returns the currently connected Stellar address from localStorage.
 * Returns null if no wallet is connected.
 */
export function getConnectedAddress(): string | null {
  // TODO: implement
}

/**
 * Builds and submits a place_bet contract invocation.
 *
 * Steps:
 *   1. Build XDR for InvokeContractHostFunction(market_contract, "place_bet", args)
 *   2. Pass XDR to Freighter for signing (freighter.signTransaction)
 *   3. Submit signed XDR to Stellar network via backend proxy or Horizon
 *   4. Poll for confirmation; return tx hash on SUCCESS
 *
 * Throws WalletSignError if user rejects signing.
 * Throws TxSubmissionError if network rejects the transaction.
 */
export async function submitBet(
  market_contract_address: string,
  side: BetSide,
  amount_xlm: number,
): Promise<string> {
  // TODO: implement
}

/**
 * Builds and submits a claim_winnings contract invocation for the connected wallet.
 * Returns the transaction hash on confirmation.
 */
export async function submitClaim(
  market_contract_address: string,
): Promise<string> {
  // TODO: implement
}

/**
 * Builds and submits a claim_refund contract invocation (cancelled market).
 * Returns the transaction hash on confirmation.
 */
export async function submitRefund(
  market_contract_address: string,
): Promise<string> {
  // TODO: implement
}

/**
 * Returns the XLM balance of the connected wallet address.
 * Calls Horizon /accounts/:address and reads native balance.
 * Returns 0 if address is unfunded.
 */
export async function getWalletBalance(): Promise<number> {
  // TODO: implement
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Converts XLM (decimal) to stroops (integer i128 compatible).
 * 1 XLM = 10_000_000 stroops.
 * Uses integer arithmetic to avoid floating point errors.
 */
export function xlmToStroops(xlm: number): bigint {
  // TODO: implement
}

/**
 * Converts stroops (bigint) to XLM (decimal number).
 * Used for display purposes only.
 */
export function stroopsToXlm(stroops: bigint | string): number {
  // TODO: implement
}
