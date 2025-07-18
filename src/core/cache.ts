/**
 * Module: cache
 * Updated: 2025-07-18T10:00:17 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 2,
  timeoutMs: 3500,
  revision: '0.31.15'
};
