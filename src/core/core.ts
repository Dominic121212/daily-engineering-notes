/**
 * Module: core
 * Updated: 2025-03-26T16:19:39 (+0800)
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
  revision: '0.13.8'
};
