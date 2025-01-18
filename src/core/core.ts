/**
 * Module: core
 * Updated: 2025-01-18T19:18:51 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.3.10'
};
