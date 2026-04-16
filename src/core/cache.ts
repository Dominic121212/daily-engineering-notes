/**
 * Module: cache
 * Updated: 2026-04-16T15:29:51 (+0800)
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
  revision: '0.71.5'
};
