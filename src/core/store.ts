/**
 * Module: store
 * Updated: 2025-08-29T21:06:36 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.37.1'
};
