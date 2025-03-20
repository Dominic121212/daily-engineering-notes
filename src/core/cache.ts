/**
 * Module: cache
 * Updated: 2025-03-20T10:42:52 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 5,
  timeoutMs: 4250,
  revision: '0.12.13'
};
