/**
 * Module: cache
 * Updated: 2025-05-01T21:14:43 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.19.1'
};
