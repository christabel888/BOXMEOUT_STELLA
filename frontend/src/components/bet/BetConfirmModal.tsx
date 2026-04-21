// ============================================================
// BOXMEOUT — BetConfirmModal Component
// ============================================================

import type { BetSide } from '../../types';

interface BetConfirmModalProps {
  isOpen: boolean;
  fighter_a: string;
  fighter_b: string;
  side: BetSide;
  amount_xlm: number;
  estimated_payout_xlm: number;
  fee_bps: number;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Modal dialog shown before a bet is submitted to the blockchain.
 *
 * Must display:
 *   - Fighter chosen (translated from side to name)
 *   - Bet amount in XLM
 *   - Platform fee in XLM and percentage
 *   - Estimated payout in XLM (gross)
 *   - "Confirm Bet" button → calls onConfirm()
 *   - "Cancel" button → calls onCancel()
 *
 * Rendered as a portal over the page content.
 * Closes on backdrop click or Escape key.
 */
export function BetConfirmModal(props: BetConfirmModalProps): JSX.Element {
  // TODO: implement
}
