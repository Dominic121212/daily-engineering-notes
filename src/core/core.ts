/**
 * Module: core
 * Updated: 2025-03-15T13:02:53 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.11.17'
};
