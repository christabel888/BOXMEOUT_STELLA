// ============================================================
// BOXMEOUT — BetPanel Component
// Full bet placement UI shown on the Market Detail page.
// ============================================================

import type { Market } from '../../types';

interface BetPanelProps {
  market: Market;
}

/**
 * Bet placement panel. Uses the useBet hook internally.
 *
 * Must render:
 *   1. Three toggle buttons: [Fighter A] [Draw] [Fighter B]
 *      — selected button highlighted; reflects useBet.side state
 *   2. Amount input (XLM) with min/max hints from market.config
 *   3. Estimated payout display (updates live as side/amount changes)
 *   4. Platform fee line (e.g. "Fee: 2%")
 *   5. Submit button — disabled while isSubmitting or amount invalid
 *   6. TxStatusToast shown after submission
 *
 * If wallet is not connected:
 *   - Hide the form
 *   - Show a "Connect Wallet to Bet" prompt button
 *
 * If market.status !== "open":
 *   - Show status-appropriate message (e.g. "Betting is closed")
 *   - Disable the form
 */
export function BetPanel({ market }: BetPanelProps): JSX.Element {
  // TODO: implement
}
