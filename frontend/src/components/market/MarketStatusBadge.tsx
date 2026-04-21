// ============================================================
// BOXMEOUT — MarketStatusBadge Component
// ============================================================

import type { MarketStatus } from '../../types';

interface MarketStatusBadgeProps {
  status: MarketStatus;
}

/**
 * Small pill-shaped badge indicating market status.
 *
 * Color mapping:
 *   open       → green
 *   locked     → yellow / amber
 *   resolved   → blue
 *   cancelled  → gray
 *   disputed   → red
 *
 * Text: capitalize the status string (e.g. "Open", "Locked").
 */
export function MarketStatusBadge({
  status,
}: MarketStatusBadgeProps): JSX.Element {
  // TODO: implement
}
