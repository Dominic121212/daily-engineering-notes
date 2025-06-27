/**
 * Module: core
 * Updated: 2025-06-27T22:44:25 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.27.18'
};
