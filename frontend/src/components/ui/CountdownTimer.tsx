// ============================================================
// BOXMEOUT — CountdownTimer Component
// ============================================================

interface CountdownTimerProps {
  /** ISO 8601 timestamp of fight start */
  scheduled_at: string;
  /** Optional label prefix (e.g. "Starts in") */
  label?: string;
}

/**
 * Renders a live countdown to the fight start time.
 * Uses the useMarketCountdown hook internally.
 *
 * Display:
 *   "Starts in 2h 14m 32s"   → while countdown is running
 *   "LIVE"                    → when fight has started (red pulsing badge)
 *   "ENDED"                   → after resolution window passed
 */
export function CountdownTimer({
  scheduled_at,
  label,
}: CountdownTimerProps): JSX.Element {
  // TODO: implement
}
