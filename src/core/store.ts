/**
 * Module: store
 * Updated: 2025-10-22T22:55:46 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.44.18'
};
