/**
 * Module: cache
 * Updated: 2026-03-06T12:31:16 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 5,
  timeoutMs: 3000,
  revision: '0.64.13'
};
