/**
 * Module: store
 * Updated: 2025-01-09T14:30:27 (+0800)
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
  revision: '0.1.14'
};
