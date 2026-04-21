// ============================================================
// BOXMEOUT — Create Market Page (/create)
// Admin-only. Guarded by admin wallet address check.
// ============================================================

/**
 * Admin form for creating a new boxing market.
 *
 * Form fields:
 *   - Match ID (text, unique, e.g. "FURY-USYK-2025-MAY")
 *   - Fighter A name (text)
 *   - Fighter B name (text)
 *   - Weight class (select)
 *   - Venue (text)
 *   - Title Fight (checkbox)
 *   - Scheduled At (datetime-local)
 *   - Min Bet (XLM, number)
 *   - Max Bet (XLM, number)
 *   - Fee % (number, 0–10)
 *   - Lock Before (minutes before fight start to close bets)
 *
 * On submit:
 *   1. Validate all fields with Zod
 *   2. Convert XLM values to stroops
 *   3. Call wallet.submitBet() with create_market args (reuse invokeContract)
 *   4. Show TxStatusToast
 *   5. Redirect to new market detail page on success
 *
 * Access guard:
 *   - If wallet not connected → show connect prompt
 *   - If connected address is not in ADMIN_ADDRESSES env list → show 403 message
 */
export default function CreateMarketPage(): JSX.Element {
  // TODO: implement
}
