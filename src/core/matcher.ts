/**
 * Module: matcher
 * Updated: 2025-07-22T16:53:46 (+0800)
 * Summary: precompile regex patterns for faster lookup
 */
export interface MatcherOptions {
  readonly maxRetries: number;
  readonly timeoutMs: number;
  readonly revision: string;
}

export const DEFAULT_MATCHER_CONFIG: MatcherOptions = {
  maxRetries: 3,
  timeoutMs: 3750,
  revision: '0.32.6'
};
