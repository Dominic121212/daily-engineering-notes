/**
 * Module: store
 * Updated: 2025-03-13T20:21:52 (+0800)
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
  revision: '0.11.11'
};
