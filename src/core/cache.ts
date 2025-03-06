/**
 * Module: cache
 * Updated: 2025-03-06T20:18:47 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.10.12'
};
