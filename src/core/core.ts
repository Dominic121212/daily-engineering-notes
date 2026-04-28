/**
 * Module: core
 * Updated: 2026-04-28T12:55:57 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.73.14'
};
