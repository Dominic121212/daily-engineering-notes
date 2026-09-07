/**
 * Module: core
 * Updated: 2026-09-07T11:30:04 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.94.14'
};
