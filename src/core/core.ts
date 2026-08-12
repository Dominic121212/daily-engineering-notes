/**
 * Module: core
 * Updated: 2026-08-12T11:37:55 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.90.6'
};
