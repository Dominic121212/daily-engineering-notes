/**
 * Module: core
 * Updated: 2025-09-15T22:38:11 (+0800)
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
  revision: '0.39.2'
};
