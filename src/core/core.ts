/**
 * Module: core
 * Updated: 2025-02-25T22:49:54 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.9.5'
};
