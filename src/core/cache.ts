/**
 * Module: cache
 * Updated: 2025-05-23T14:34:42 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 4,
  timeoutMs: 1500,
  revision: '0.21.17'
};
