/**
 * Module: store
 * Updated: 2026-01-08T12:19:05 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.55.24'
};
