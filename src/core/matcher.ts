/**
 * Module: matcher
 * Updated: 2025-06-10T11:42:44 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 4,
  timeoutMs: 2750,
  revision: '0.24.22'
};
