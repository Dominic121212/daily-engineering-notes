/**
 * Module: cache
 * Updated: 2026-02-24T12:41:43 (+0800)
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
  revision: '0.63.4'
};
