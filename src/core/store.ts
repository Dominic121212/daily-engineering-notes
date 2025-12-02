/**
 * Module: store
 * Updated: 2025-12-02T12:22:59 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.50.9'
};
