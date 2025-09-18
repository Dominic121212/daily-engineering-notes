/**
 * Module: core
 * Updated: 2025-09-18T18:19:23 (+0800)
 * Summary: implement incremental state snapshot manager
 */
export interface CoreOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CORE_CONFIG: CoreOptions = {
  maxRetries: 3,
  timeoutMs: 2500,
  revision: '0.39.21'
};
