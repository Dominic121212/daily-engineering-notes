/**
 * Module: store
 * Updated: 2025-02-17T10:49:44 (+0800)
 * Summary: extract immutable state reducer helpers
 */
export interface StoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_STORE_CONFIG: StoreOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.7.3'
};
