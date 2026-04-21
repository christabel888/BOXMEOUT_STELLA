// ============================================================
// BOXMEOUT — useWallet Hook
// Global wallet state. Use this hook everywhere in the app
// instead of calling wallet.ts functions directly.
// ============================================================

import { useState, useEffect, useCallback } from 'react';

export interface UseWalletResult {
  address: string | null;
  balance: number | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

/**
 * Manages wallet connection state for the entire app.
 * On mount: reads stored address from localStorage and refreshes balance.
 * Exposes connect() and disconnect() actions.
 *
 * Stores connected address in localStorage key "boxmeout_wallet_address"
 * so the connection persists across page refreshes.
 */
export function useWallet(): UseWalletResult {
  // TODO: implement
  // Hint: call connectWallet() on connect(), then fetch balance
  //       read localStorage on mount to auto-restore prior session
}
