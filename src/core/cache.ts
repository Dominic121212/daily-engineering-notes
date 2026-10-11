/**
 * Module: cache
 * Updated: 2026-10-11T23:26:27 (+0800)
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
  revision: '0.100.6'
};
