// ============================================================
// BOXMEOUT — Global Zustand Store
// Holds app-wide state: wallet, network, notifications.
// Contributors: implement the store slices.
// ============================================================

import { create } from 'zustand';
import type { TxStatus } from '../types';

export type Network = 'testnet' | 'mainnet';

interface AppState {
  // ── Wallet ────────────────────────────────────────────────
  walletAddress: string | null;
  walletBalance: number | null;
  isConnecting: boolean;

  // ── Network ───────────────────────────────────────────────
  network: Network;

  // ── Last transaction ──────────────────────────────────────
  lastTxStatus: TxStatus;

  // ── Actions ───────────────────────────────────────────────
  /** Set connected wallet address and balance */
  setWallet: (address: string, balance: number) => void;
  /** Clear wallet state on disconnect */
  clearWallet: () => void;
  /** Toggle between testnet and mainnet */
  setNetwork: (network: Network) => void;
  /** Update last transaction status for TxStatusToast */
  setTxStatus: (status: TxStatus) => void;
}

/**
 * Creates the global Zustand store.
 *
 * Initial state:
 *   walletAddress = null
 *   network = "testnet"
 *   lastTxStatus = { hash: null, status: "idle", error: null }
 */
export const useAppStore = create<AppState>((set) => ({
  // TODO: implement initial state and all action implementations
}));
