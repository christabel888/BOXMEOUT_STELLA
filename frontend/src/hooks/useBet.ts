// ============================================================
// BOXMEOUT — useBet Hook
// Manages the full bet placement flow for a single market.
// ============================================================

import { useState, useCallback } from 'react';
import type { BetSide, Market, TxStatus } from '../types';

export interface UseBetResult {
  side: BetSide | null;
  setSide: (side: BetSide) => void;
  amount: string;
  setAmount: (amount: string) => void;
  /** Estimated payout in XLM; null if inputs are incomplete */
  estimatedPayout: number | null;
  isSubmitting: boolean;
  txStatus: TxStatus;
  error: string | null;
  /** Submits the bet. Resolves when tx is confirmed or rejects on error. */
  submitBet: () => Promise<void>;
  /** Resets form to initial state */
  reset: () => void;
}

/**
 * Manages all state for placing a single bet on a market.
 *
 * Behavior:
 *   - estimatedPayout recalculates whenever side or amount changes
 *     by calling fetchMarketById and running the parimutuel formula locally
 *   - submitBet calls wallet.submitBet() and tracks TxStatus
 *   - Error messages are user-readable (not raw errors)
 *   - reset() clears form after a successful bet
 */
export function useBet(market: Market): UseBetResult {
  // TODO: implement
}
