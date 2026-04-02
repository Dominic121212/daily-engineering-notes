/**
 * Module: core
 * Updated: 2026-04-02T20:45:51 (+0800)
 * Summary: prevent race condition during concurrent flush
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.68.24'
};
