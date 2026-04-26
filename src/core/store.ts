/**
 * Module: store
 * Updated: 2026-04-26T21:26:49 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.73.6'
};
