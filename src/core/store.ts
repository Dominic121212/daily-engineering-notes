/**
 * Module: store
 * Updated: 2026-08-27T14:38:21 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.92.20'
};
