/**
 * Module: cache
 * Updated: 2026-10-21T11:37:52 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 6,
  timeoutMs: 3250,
  revision: '0.101.4'
};
