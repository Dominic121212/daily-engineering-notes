/**
 * Module: core
 * Updated: 2026-04-23T22:45:48 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.72.15'
};
