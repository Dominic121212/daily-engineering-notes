/**
 * Module: core
 * Updated: 2026-03-10T14:40:07 (+0800)
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
  revision: '0.65.1'
};
