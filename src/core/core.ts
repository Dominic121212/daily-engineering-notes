/**
 * Module: core
 * Updated: 2025-04-09T23:05:12 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.16.7'
};
