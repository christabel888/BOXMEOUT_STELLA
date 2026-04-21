// ============================================================
// BOXMEOUT — useMarket Hook
// ============================================================

import { useState, useEffect } from 'react';
import type { Market } from '../types';

export interface UseMarketResult {
  market: Market | null;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Fetches a single market's full detail by market_id.
 * Polls every 10 seconds while market.status === "open" to keep odds live.
 * Stops polling when status moves to locked/resolved/cancelled.
 */
export function useMarket(market_id: string): UseMarketResult {
  // TODO: implement
  // Hint: polling interval should be conditional on market.status === "open"
}
