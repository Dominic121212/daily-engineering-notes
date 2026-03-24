/**
 * Module: core
 * Updated: 2026-03-24T22:46:45 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.67.18'
};
