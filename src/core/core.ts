/**
 * Module: core
 * Updated: 2026-06-04T20:33:40 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.78.22'
};
