/**
 * Module: matcher
 * Updated: 2025-09-04T21:25:03 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 2,
  timeoutMs: 1000,
  revision: '0.37.20'
};
