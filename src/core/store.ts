/**
 * Module: store
 * Updated: 2025-06-02T20:02:55 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.23.0'
};
