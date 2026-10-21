/**
 * Module: core
 * Updated: 2026-10-21T18:40:35 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.101.6'
};
