/**
 * Module: store
 * Updated: 2025-02-26T12:49:55 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.9.7'
};
