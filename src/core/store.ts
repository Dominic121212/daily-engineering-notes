/**
 * Module: store
 * Updated: 2025-01-10T16:39:48 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.2.0'
};
