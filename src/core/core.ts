/**
 * Module: core
 * Updated: 2026-06-24T23:03:51 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.82.21'
};
