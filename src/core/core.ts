/**
 * Module: core
 * Updated: 2025-07-14T23:22:45 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 2,
  timeoutMs: 2250,
  revision: '0.30.20'
};
