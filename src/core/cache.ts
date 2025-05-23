/**
 * Module: cache
 * Updated: 2025-05-23T17:15:01 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 6,
  timeoutMs: 2000,
  revision: '0.21.19'
};
