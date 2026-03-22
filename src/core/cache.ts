/**
 * Module: cache
 * Updated: 2026-03-22T15:17:09 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.67.5'
};
