/**
 * Module: cache
 * Updated: 2025-12-30T12:55:05 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 3,
  timeoutMs: 1250,
  revision: '0.54.16'
};
