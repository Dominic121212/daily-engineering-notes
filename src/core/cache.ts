/**
 * Module: cache
 * Updated: 2026-09-10T17:00:20 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.95.6'
};
