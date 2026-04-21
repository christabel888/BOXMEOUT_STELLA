// ============================================================
// BOXMEOUT — MarketOddsBar Component
// ============================================================

interface MarketOddsBarProps {
  pool_a: string;    // Stroops as string
  pool_b: string;
  pool_draw: string;
  fighter_a: string;
  fighter_b: string;
}

/**
 * Three-segment horizontal bar showing the proportional split of the pools.
 *
 * Layout: [== Fighter A ==][= Draw =][=== Fighter B ===]
 *
 * Width of each segment = pool_x / total_pool * 100%.
 * If total_pool is 0, render equal thirds.
 * Animate width changes with a CSS transition.
 * Show percentage label inside each segment (if wide enough, else hide).
 */
export function MarketOddsBar({
  pool_a,
  pool_b,
  pool_draw,
  fighter_a,
  fighter_b,
}: MarketOddsBarProps): JSX.Element {
  // TODO: implement
  // Hint: convert pool strings to BigInt for safe math
}
