// ============================================================
// BOXMEOUT — useMarketCountdown Hook
// ============================================================

import { useState, useEffect } from 'react';

/**
 * Returns a live human-readable countdown string to the fight start time.
 *
 * Return values by time remaining:
 *   > 0s remaining  → "Xh Ym Zs"  (e.g. "2h 14m 32s")
 *   0s (at start)   → "LIVE"
 *   > resolution window passed → "ENDED"
 *
 * Updates every 1 second.
 * Cleans up the interval when the component unmounts.
 *
 * @param scheduled_at  ISO 8601 timestamp string of fight start
 */
export function useMarketCountdown(scheduled_at: string): string {
  // TODO: implement
  // Hint: use Date.now() for current time
  //       clear interval in useEffect cleanup
}
