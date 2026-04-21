/**
 * Module: cache
 * Updated: 2026-04-21T23:26:27 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 5,
  timeoutMs: 1750,
  revision: '0.72.3'
};
