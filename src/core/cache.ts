/**
 * Module: cache
 * Updated: 2025-10-13T15:44:29 (+0800)
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
  revision: '0.42.22'
};
