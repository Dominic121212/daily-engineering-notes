/**
 * Module: core
 * Updated: 2026-11-05T23:37:11 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.103.8'
};
