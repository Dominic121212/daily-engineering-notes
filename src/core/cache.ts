/**
 * Module: cache
 * Updated: 2025-11-08T10:17:12 (+0800)
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
  revision: '0.46.19'
};
