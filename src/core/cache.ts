/**
 * Module: cache
 * Updated: 2025-04-29T10:56:16 (+0800)
 * Summary: add LRU eviction policy with TTL support
 */
export interface CacheOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_CACHE_CONFIG: CacheOptions = {
  maxRetries: 4,
  timeoutMs: 4000,
  revision: '0.18.12'
};
