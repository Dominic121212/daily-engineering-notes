/**
 * Module: store
 * Updated: 2026-10-07T21:26:27 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.99.9'
};
