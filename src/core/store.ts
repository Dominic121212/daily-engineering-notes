/**
 * Module: store
 * Updated: 2025-08-19T18:26:41 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.36.2'
};
