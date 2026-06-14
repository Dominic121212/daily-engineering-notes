/**
 * Module: cache
 * Updated: 2026-06-14T21:21:51 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 6,
  timeoutMs: 4500,
  revision: '0.80.24'
};
