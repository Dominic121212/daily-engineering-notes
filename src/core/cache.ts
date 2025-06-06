/**
 * Module: cache
 * Updated: 2025-06-06T12:59:28 (+0800)
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
  revision: '0.24.0'
};
