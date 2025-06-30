/**
 * Module: store
 * Updated: 2025-06-30T13:33:15 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.28.5'
};
