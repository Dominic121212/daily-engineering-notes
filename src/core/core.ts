/**
 * Module: core
 * Updated: 2025-07-25T22:35:53 (+0800)
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
  revision: '0.32.19'
};
