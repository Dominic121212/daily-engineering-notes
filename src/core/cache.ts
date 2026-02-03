/**
 * Module: cache
 * Updated: 2026-02-03T22:43:06 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.59.23'
};
