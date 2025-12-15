/**
 * Module: store
 * Updated: 2025-12-15T10:55:27 (+0800)
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
  revision: '0.51.23'
};
