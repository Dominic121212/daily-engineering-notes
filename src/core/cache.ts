/**
 * Module: cache
 * Updated: 2025-01-01T11:41:49 (+0800)
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
  revision: '0.0.3'
};
