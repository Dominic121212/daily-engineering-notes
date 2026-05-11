/**
 * Module: core
 * Updated: 2026-05-11T19:12:06 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.75.8'
};
