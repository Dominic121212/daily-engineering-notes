/**
 * Module: store
 * Updated: 2026-03-24T11:24:31 (+0800)
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
  revision: '0.67.15'
};
