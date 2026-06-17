/**
 * Module: cache
 * Updated: 2026-06-17T15:34:09 (+0800)
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
  revision: '0.81.17'
};
