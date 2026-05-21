/**
 * Module: store
 * Updated: 2026-05-21T19:00:34 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.76.23'
};
