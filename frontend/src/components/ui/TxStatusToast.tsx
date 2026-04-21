// ============================================================
// BOXMEOUT — TxStatusToast Component
// ============================================================

import type { TxStatus } from '../../types';

interface TxStatusToastProps {
  txStatus: TxStatus;
  /** Called when user dismisses the toast */
  onDismiss: () => void;
}

/**
 * Toast notification for Stellar transaction lifecycle.
 *
 * States:
 *   idle     → render nothing
 *   pending  → spinner + "Transaction pending..."
 *   success  → green check + "Bet placed!" + Stellar Explorer link
 *   error    → red X + error message + retry suggestion
 *
 * Auto-dismisses after 6 seconds on success.
 * Stays visible until dismissed on error.
 * Renders as a fixed overlay at bottom-right of screen.
 *
 * Explorer link format:
 *   Testnet: https://stellar.expert/explorer/testnet/tx/{hash}
 *   Mainnet: https://stellar.expert/explorer/public/tx/{hash}
 */
export function TxStatusToast({
  txStatus,
  onDismiss,
}: TxStatusToastProps): JSX.Element {
  // TODO: implement
}
