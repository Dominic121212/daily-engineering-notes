/**
 * Module: store
 * Updated: 2025-12-03T18:15:45 (+0800)
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
  revision: '0.50.12'
};
