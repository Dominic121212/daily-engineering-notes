/**
 * Module: store
 * Updated: 2026-07-14T11:27:34 (+0800)
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
  revision: '0.85.12'
};
