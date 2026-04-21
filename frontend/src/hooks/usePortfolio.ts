// ============================================================
// BOXMEOUT — usePortfolio Hook
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import type { Portfolio, TxStatus } from '../types';

export interface UsePortfolioResult {
  portfolio: Portfolio | null;
  isLoading: boolean;
  error: Error | null;
  claimTxStatus: TxStatus;
  /** Submits claim_winnings for a market contract. Refreshes portfolio after. */
  claimWinnings: (market_contract_address: string) => Promise<void>;
  /** Submits claim_refund for a cancelled market. Refreshes portfolio after. */
  claimRefund: (market_contract_address: string) => Promise<void>;
}

/**
 * Fetches the portfolio for the currently connected wallet.
 * Returns null portfolio if no wallet is connected.
 * Refreshes automatically after a successful claim.
 */
export function usePortfolio(): UsePortfolioResult {
  // TODO: implement
  // Hint: use useWallet() to get the connected address
}
